import {combineReducers} from 'redux';
import postReducer from './postReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  post:postReducer

})

export default rootReducer;