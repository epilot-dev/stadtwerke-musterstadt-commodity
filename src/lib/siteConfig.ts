/**
 * Everything that ties this site to an epilot organization lives here.
 * Organization: 20000784 (Commodity E2E Blueprint Sandbox).
 */

// Journeys embedded on the site, keyed by the page that shows them
export const JOURNEY_IDS = {
  // Tariff calculators (the Strom journey is also the homepage calculator)
  homepage: '05dd7af0-b725-11f1-9a00-7f0bb1c2aa4f',
  okostrom: '05dd7af0-b725-11f1-9a00-7f0bb1c2aa4f',
  gas: '040586a0-b725-11f1-9a00-7f0bb1c2aa4f',
  // Service pages
  umzug: 'ce0e283a-e5c2-4d58-959c-85bb74fa5da8',
  sepa: '644cb57c-1cd8-4a1f-9e67-9b1330257e51',
  abschlag: '81296980-f71f-437d-ada5-27c59e43c196',
  kuendigung: '256640bb-5d7b-46fd-8398-7b3d380687e1',
  zaehlerstand: '02eec671-f096-41e5-b5a6-3b0d67ae93e8',
  rechnungsadresse: 'fb057397-8449-4708-bd44-909c628499be',
  persoenlicheDaten: '71f1f47f-e294-4e5d-a0b6-870496fdb297',
  simulationsrechnung: '4532e82e-b10c-4eb7-90f9-8b29066fb047',
  kontakt: 'ba5af53f-7cb8-4227-889c-b8b25fb6b9a9',
} as const;

export type JourneyKey = keyof typeof JOURNEY_IDS;

// End customer portal of the organization
export const PORTAL_URL = 'https://service-blueprint-kundenportal.ecp.epilot.io/';
