import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunkMiddleware

  ]
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}