import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem, Input } from '../../components';
import './TodoList.scss';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <Input placeholder="Add todo here and press enter to submit" />
      {todos.length === 0 ? <h2>There is no todo</h2> : (
        <ul>
          {todos.map((todo) => <TodoItem text={todo.text} key={todo.id} />)}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
