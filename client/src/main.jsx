import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { TransactionProvider } from './context/TransactionContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <TransactionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionProvider>
);