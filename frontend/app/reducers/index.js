import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import elements from './elements';

const rootReducer = combineReducers({
  elements,
  routing
});

export default rootReducer;
