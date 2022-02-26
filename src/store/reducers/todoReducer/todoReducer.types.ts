import { Todo } from '../../../interfaces/todo.interface';


export enum TodoActionTypes {
  FETCH_TODOES = 'FETCH_TODOES',
  FETCH_TODOES_SUCCESS = 'FETCH_TODOES_SUCCESS',
  FETCH_TODOES_ERROR = 'FETCH_TODOES_ERROR ',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}


export interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOES;
}


export interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOES_SUCCESS;
  payload: Todo[];
}


export interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOES_ERROR;
  payload: string;
}


export interface SetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}


export type TodoAction =
  FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPageAction;


export interface TodoState {
  todoes: Todo[];
  isLoading: boolean;
  error: null | string;
  page: number;
  limit: number;
}
