import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { worker } from 'mockServiceWorker/browser';

async function prepare() {
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

prepare().then(() => {
  const container = document.getElementById('root');
  const root = ReactDOMClient.createRoot(container as Element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
