import React from "react";

const myLogger = (store) => (next) => (action) => {
  console.log("previous state: ", JSON.stringify(store.getState()));
  return next(action);
};

export default myLogger;
