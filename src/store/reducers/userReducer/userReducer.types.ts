import { User } from '../../../interfaces/user.interface';


export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}


export interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}


export interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}


export interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}


export type UserAction = FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;


export interface UserState {
  users: User[],
  isLoading: boolean,
  error: null | string,
}
