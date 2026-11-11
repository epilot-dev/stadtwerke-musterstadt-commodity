# Stadtwerke Musterstadt (Commodity)

Mock utility website for the epilot **Commodity E2E Blueprint Sandbox** organization (`20000784`).
A trimmed copy of [stadtwerke-musterstadt](https://github.com/epilot-dev/stadtwerke-musterstadt): tariff
calculators for electricity and gas, self-service journeys, and the epilot Website Chat.

## Development

```bash
pnpm install
pnpm dev
```

## Pointing the site at an organization

- `src/lib/siteConfig.ts` holds the journey IDs and the customer portal URL.
- `src/lib/chatMode.ts` holds the default Website Chat embed.
- `src/styles/theme.css` holds the brand palette (`--color-brand-*`), taken from the organization's
  Design Builder design.

## Showing another organization's chat

Open the site with `?chat=<Website Chat embed id>` to demo another org's chat:

    https://stadtwerke-commodity.epilot.io/?chat=<embed id>

- The site takes its colours, font and corner radius from that chat's design.
- Journeys, menus and the portal link are hidden, because they belong to the Commodity org.
- The choice lasts for the browser tab. `?reset` returns to the Commodity chat.
- The embed must allow `https://stadtwerke-commodity.epilot.io` (Agent Builder, embed settings),
  otherwise the chat is refused and the site keeps its default colours.

The logic lives in `src/lib/chatMode.ts`.
