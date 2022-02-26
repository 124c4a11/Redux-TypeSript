import axios from 'axios';
import { Dispatch } from 'redux';

import { Todo } from '../../interfaces/todo.interface';
import {
  TodoAction,
  TodoActionTypes
} from '../reducers/todoReducer/todoReducer.types';


export function fetchTodo(page: number = 1, limit: number = 10) {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOES });

      const { data } = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: limit,
        }
      });

      dispatch({ type: TodoActionTypes.FETCH_TODOES_SUCCESS, payload: data });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: TodoActionTypes.FETCH_TODOES_ERROR, payload: err.message });
      }
    }
  };
}


export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
}
