import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Todos from '../Todos';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/todos" component={Todos} />
  </Switch>
);

export default App;
