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
- `index.html` holds the Website Chat embed.
- `src/styles/theme.css` holds the brand palette (`--color-brand-*`), taken from the organization's
  Design Builder design.
