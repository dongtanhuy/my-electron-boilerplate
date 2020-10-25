/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import configStore from './store';
import App from './screens/App';

const store = configStore();
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
