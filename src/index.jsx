import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store';
import App from './components/App';

// import './assets/style/app.scss';

const store = configStore();
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)