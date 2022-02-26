import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer/todoReducer';

import { userReducer } from './userReducer/userReducer';


export const rootReducer = combineReducers({
  users: userReducer,
  todo: todoReducer,
});


export type RootReducer = ReturnType<typeof rootReducer>;
