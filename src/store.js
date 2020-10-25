import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const configStore = () => {
  const middleWares = [];
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
  }
  const store = createStore(reducers, applyMiddleware(...middleWares));
  return store;
};

export default configStore;
