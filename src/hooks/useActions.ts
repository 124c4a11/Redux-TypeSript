import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../store/actions';


export function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
}
