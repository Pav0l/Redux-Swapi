import { combineReducers } from 'redux';
import { charsReducer, fetchingReducer, errorReducer } from './starWarsReducer';

const rootReducer = combineReducers({
  characters: charsReducer,
  fetching: fetchingReducer,
  error: errorReducer
});

export default rootReducer;