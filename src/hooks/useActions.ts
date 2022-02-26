import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActionCreators from '../store/actions/user.actions';


export function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(UserActionCreators, dispatch);
}
