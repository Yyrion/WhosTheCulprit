import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://27f4ccc1da417795058bc047dcdf94a4@o4510120291926016.ingest.de.sentry.io/4510120408973392",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
