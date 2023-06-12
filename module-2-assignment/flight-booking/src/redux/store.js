import React from "react";
import bookingReducer from "./booking/bookingReducer";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import myLogger from "./myLogger";

const store = createStore(bookingReducer, applyMiddleware(myLogger));
export default store;
