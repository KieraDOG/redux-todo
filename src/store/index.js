import { combineReducers, createStore } from 'redux';
import todos from './todos';

const reducer = combineReducers({
  todos,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;