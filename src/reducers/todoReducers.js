import { TODO_ACTIONS } from '../constants/actionTypes';
import { initialState } from './initialState';

const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
