import { TODO_ACTIONS } from '../constants/actionTypes';

const addTodoAction = (todo) => ({
  type: TODO_ACTIONS.ADD_TODO,
  payload: todo
})

export { addTodoAction }