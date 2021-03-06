import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ServicesContainer } from './services/ServicesContainer';
import { CommandService } from './services/CommandService';
import { KeyListenerService } from './services/KeyListenerService';

const commandService = new CommandService();
const keyListenerService = new KeyListenerService();

ServicesContainer.getInstance().addService(commandService);
ServicesContainer.getInstance().addService(keyListenerService);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
