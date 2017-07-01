import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { ApolloProvider } from 'react-apollo'
import apiClient from './backendClient'

ReactDOM.render(
  <ApolloProvider client={apiClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
