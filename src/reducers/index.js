import { combineReducers } from 'redux';
import drumReducer from './drumReducer';
import selectReducer from './selected';

export default combineReducers({
  drum: drumReducer,
  selected: selectReducer
});

