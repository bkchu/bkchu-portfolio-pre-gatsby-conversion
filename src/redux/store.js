// import { createStore, applyMiddleware, combineReducers } from "redux";
import { createStore } from 'redux';
// import promiseMiddleware from "redux-promise-middleware";
import reducer from './ducks/reducer';

// export default createStore(
//   combineReducers({
//     userReducer,
//     postReducer,
//     followReducer,
//     likeReducer,
//     commentReducer
//   }),
//   applyMiddleware(promiseMiddleware())
// );

export default createStore(reducer);
