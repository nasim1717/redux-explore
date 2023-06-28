const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware, fetchAsyncMiddleware } = require("./middleware");
const { fetchTodos } = require("./function");
const thunk = require("redux-thunk");

// initial state
const initialState = {
  todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk.default)); // applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware)

// subscribe to state chenges
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn Redux form LWS",
// });

store.dispatch(fetchTodos);
