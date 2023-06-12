// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifires
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ITEST = "itest";

// action createor
const increment = (value) => {
  return {
    type: INCREMENT, //mandatory
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT, //mandatory
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
  },
};

// create reducre funciton
function counterReducer(state = initialState, action) {
  console.log(state);
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else if (action.type === ITEST) {
    const updatedState = {
      ...state,
      properties: {
        ...state.properties,
        b: state.properties.b + 1,
      },
    };
    return updatedState;
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// updae UI initially
render();

store.subscribe(render);

// buttons click listeners
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
