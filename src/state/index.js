import { combineReducers, createStore } from 'redux';
import homeReducer from './Home';

const rootReducer = combineReducers({
  homeReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
