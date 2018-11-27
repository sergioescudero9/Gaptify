import { combineReducers, createStore } from 'redux';
import homeReducer from './Home';
import artistReducer from './Artist';

const rootReducer = combineReducers({
  homeReducer,
  artistReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
