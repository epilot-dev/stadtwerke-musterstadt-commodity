/**
 * Which Website Chat the site shows, and how the site looks for it.
 *
 * By default the site shows the Commodity org's chat with its own branding and
 * journeys. Opening it with `?chat=<embed id>` switches to another org's chat:
 * the site takes its colours, font and corner radius from that chat's design,
 * and hides everything tied to the Commodity org (journeys, menus, portal link).
 * The choice lasts for the browser tab; `?reset` goes back to the default.
 */

const DEFAULT_CHAT_ID = 'a1dcc642-ab77-4560-adbd-e04af29b1370';
const CHAT_LOADER_URL = 'https://chat.epilot.io/v1/loader.js';
const CHAT_API_ORIGIN = 'https://chat.sls.epilot.io';

const CHAT_ID_KEY = 'site.chatId';
const THEME_KEY = 'site.chatTheme';
const THEME_TIMEOUT_MS = 2500;

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const HEX_COLOUR = /^#[0-9a-f]{3,8}$/i;

type SiteTheme = {
  chatId: string;
  primary?: string;
  background?: string;
  radius?: number;
  fontUrl?: string;
};

function storage(): Storage | undefined {
  try {
    return window.sessionStorage;
  } catch {
    return undefined;
  }
}

function resolveChatId(): string {
  const params = new URLSearchParams(window.location.search);
  const store = storage();

  if (params.has('reset')) {
    store?.removeItem(CHAT_ID_KEY);
    store?.removeItem(THEME_KEY);
    return DEFAULT_CHAT_ID;
  }

  const requested = params.get('chat')?.trim().toLowerCase();
  if (requested && UUID.test(requested)) {
    store?.setItem(CHAT_ID_KEY, requested);
    return requested;
  }

  const stored = store?.getItem(CHAT_ID_KEY);
  return stored && UUID.test(stored) ? stored : DEFAULT_CHAT_ID;
}

export const chatId = resolveChatId();

/** True when the site shows another org's chat instead of the Commodity one. */
export const isCustomChat = chatId !== DEFAULT_CHAT_ID;

function colour(value: unknown): string | undefined {
  return typeof value === 'string' && HEX_COLOUR.test(value) ? value : undefined;
}

function httpsUrl(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  try {
    return new URL(value).protocol === 'https:' ? value : undefined;
  } catch {
    return undefined;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function themeFromConfiguration(configuration: any): SiteTheme {
  const style = configuration?.design?.style;
  const radius = Number(style?.shape?.border_radius);

  return {
    chatId,
    primary: colour(style?.palette?.primary),
    background: colour(style?.palette?.background),
    radius: Number.isFinite(radius) && radius >= 0 && radius <= 48 ? radius : undefined,
    fontUrl: httpsUrl(style?.typography?.font?.urls?.[0]?.url),
  };
}

async function fetchTheme(): Promise<SiteTheme | undefined> {
  const response = await fetch(
    `${CHAT_API_ORIGIN}/v1/website-chats/${encodeURIComponent(chatId)}/configuration`,
    { signal: AbortSignal.timeout(THEME_TIMEOUT_MS) }
  );
  if (!response.ok) return undefined;
  return themeFromConfiguration(await response.json());
}

function cachedTheme(): SiteTheme | undefined {
  try {
    const theme = JSON.parse(storage()?.getItem(THEME_KEY) ?? 'null') as SiteTheme | null;
    return theme?.chatId === chatId ? theme : undefined;
  } catch {
    return undefined;
  }
}

function applyTheme(theme: SiteTheme) {
  const root = document.documentElement.style;

  if (theme.primary) {
    root.setProperty('--primary', theme.primary);
    root.setProperty('--color-brand', theme.primary);
    // The site's highlight and dark tones are hand-picked for the default
    // branding; for another org they are derived from its primary colour.
    root.setProperty('--color-brand-accent', `color-mix(in oklab, ${theme.primary} 72%, white)`);
    root.setProperty('--color-brand-ink', `color-mix(in oklab, ${theme.primary} 30%, black)`);
  }
  if (theme.background) {
    root.setProperty('--color-brand-surface', theme.background);
  }
  if (theme.radius !== undefined) {
    root.setProperty('--radius', `${theme.radius}px`);
  }
  if (theme.fontUrl) {
    const font = new FontFace('Chat Design Font', `url("${theme.fontUrl}")`, {
      display: 'swap',
    });
    font
      .load()
      .then((loaded) => {
        document.fonts.add(loaded);
        root.setProperty('--font-sans', `'Chat Design Font', ui-sans-serif, system-ui, sans-serif`);
      })
      .catch(() => {
        // Keep the site's own font when the design's font cannot be loaded.
      });
  }
}

function loadChat() {
  const script = document.createElement('script');
  script.async = true;
  script.src = CHAT_LOADER_URL;
  script.dataset.epilotChat = chatId;
  script.dataset.apiOrigin = CHAT_API_ORIGIN;
  document.head.appendChild(script);
}

/**
 * Starts the chat and, for another org's chat, themes the site from its design.
 * Resolves once the theme is applied (or could not be read), so the site can
 * render without first flashing the default colours.
 */
export async function prepareSite(): Promise<void> {
  loadChat();
  if (!isCustomChat) return;

  const cached = cachedTheme();
  if (cached) {
    applyTheme(cached);
    return;
  }

  try {
    const theme = await fetchTheme();
    if (!theme) return;
    applyTheme(theme);
    storage()?.setItem(THEME_KEY, JSON.stringify(theme));
  } catch {
    // The chat is refused or unreachable: keep the default look.
  }
}
