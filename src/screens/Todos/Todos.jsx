import React from 'react';
import { Link } from 'react-router-dom';
import { TodoList } from '../../components';

const Todos = () => (
  <div className="TodoList">
    <h1>Todo List</h1>
    <TodoList />
    <Link to="/">
      Back to home
    </Link>
  </div>
);

export default Todos;
