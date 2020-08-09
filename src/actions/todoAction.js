import { TODO_ACTIONS } from '../constants/actionTypes';

const addTodo = (todo) => ({
  type: TODO_ACTIONS.ADD_TODO,
  payload: todo
})

export default { addTodo }