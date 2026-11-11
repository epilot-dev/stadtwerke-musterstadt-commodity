import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { prepareSite } from './lib/chatMode';
import './styles/index.css';

// Wait for the chat's theme (if any) so the site does not flash the default colours.
prepareSite().finally(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
