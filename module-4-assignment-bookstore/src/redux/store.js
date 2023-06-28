import { applyMiddleware, legacy_createStore as createStore } from "redux";
import booksReducer from "./bookReducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(booksReducer, applyMiddleware(thunkMiddleware));

export default store;
