import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/app/pages/Home';

import { Root } from '@/app/components/Root';
import Okostrom from '@/app/pages/Okostrom';
import Gas from '@/app/pages/Gas';
import { ServicePage } from '@/app/pages/ServicePage';
import Umzug from '@/app/pages/Umzug';
import Sepa from '@/app/pages/Sepa';
import Abschlag from '@/app/pages/Abschlag';
import Kuendigung from '@/app/pages/Kuendigung';
import Zaehlerstand from '@/app/pages/Zaehlerstand';
import Rechnungsadresse from '@/app/pages/Rechnungsadresse';
import PersoenlicheDaten from '@/app/pages/PersoenlicheDaten';
import Simulationsrechnung from '@/app/pages/Simulationsrechnung';
import Kontakt from '@/app/pages/Kontakt';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'okostrom', Component: Okostrom },
      { path: 'gas', Component: Gas },
      { path: 'service', Component: ServicePage },
      { path: 'service/umzug', Component: Umzug },
      { path: 'service/sepa', Component: Sepa },
      { path: 'service/abschlag', Component: Abschlag },
      { path: 'service/kuendigung', Component: Kuendigung },
      { path: 'service/zaehlerstand', Component: Zaehlerstand },
      { path: 'service/rechnungsadresse', Component: Rechnungsadresse },
      { path: 'service/persoenliche-daten', Component: PersoenlicheDaten },
      { path: 'service/simulationsrechnung', Component: Simulationsrechnung },
      { path: 'service/kontakt', Component: Kontakt },
    ],
  },
]);
