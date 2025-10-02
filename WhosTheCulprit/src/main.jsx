import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://679b5f930431173fe13446db94a755c3@o4510120291926016.ingest.de.sentry.io/4510120293302352",
  sendDefaultPii: false
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
