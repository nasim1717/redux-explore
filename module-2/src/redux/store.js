import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger, logger))); //cayle multiple middleware dite pari

export default store;
