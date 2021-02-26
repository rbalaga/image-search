import { applyMiddleware, combineReducers } from 'redux';
import imageReducer from './imageReducer';
import { createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
  images: imageReducer
}), {}, applyMiddleware(thunk));

export default store;