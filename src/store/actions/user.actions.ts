import axios from 'axios';
import { Dispatch } from 'redux';

import { User } from '../../interfaces/user.interface';
import {
  UserAction,
  UserActionTypes
} from '../reducers/userReducer/userReducer.types';


export function fetchUsers() {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });

      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: err.message });
      }
    }
  };
}
