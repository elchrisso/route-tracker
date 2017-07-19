import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter }  from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from './client'
import store from './store'

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
