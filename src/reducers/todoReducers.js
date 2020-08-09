import { TODO_ACTIONS } from '../constants/actionTypes';
import {initialState} from './initialState';

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case TODO_ACTIONS.ADD_TODO: 
      return {
        todos: [...state.todos, action.payload]
      }
    default:
      return state.todos;
  }
}

export default todoReducer;