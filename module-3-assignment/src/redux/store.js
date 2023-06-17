import { legacy_createStore as createStore } from "redux";
import productReduce from "./productReduce";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(productReduce, composeWithDevTools());

export default store;
