const store = require("./app/store");
const randomvedio = require("./features/thunk/randomVedio");
const relatedVedios = require("./features/thunk/relatedVedio");
const relatedVediosParameter = require("./utility/urlPrameter");

store.subscribe(() => {});

store.dispatch(randomvedio());

setTimeout(() => {
  store.dispatch(
    relatedVedios(relatedVediosParameter(store.getState().randomvedio.randomVedios.tags))
  );
}, 1000);
