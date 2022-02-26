import {
  TodoState,
  TodoAction,
  TodoActionTypes
} from './todoReducer.types';


const initialState: TodoState = {
  todoes: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 10,
};


export function todoReducer(
  state: TodoState = initialState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOES:
      return { ...state, isLoading: true };

    case TodoActionTypes.FETCH_TODOES_SUCCESS:
      return { ...state, isLoading: false, todoes: action.payload };

    case TodoActionTypes.FETCH_TODOES_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
}
