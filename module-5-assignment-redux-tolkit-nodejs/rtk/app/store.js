const { configureStore } = require("@reduxjs/toolkit");
const randomReducer = require("../features/randomVedio/randomVedio");
const relatedReducer = require("../features/relatedVedios/relatedVedio");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: {
    randomvedio: randomReducer,
    relatedvedio: relatedReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
