const store = require("./app/store");
const { counterAction } = require("./features/counter/counterSlice");
const { dynamicCounterAction } = require("./features/dynamicCounter/dynamicCounterSlice");
const { fetchPosts } = require("./features/post/postSlice");

// initial state
// console.log("initial state", store.getState());
// subscribe to state changes
store.subscribe(() => {
  //   console.log(store.getState());
});

// disptach actions
// store.dispatch(counterAction.increment());

// store.dispatch(counterAction.increment());

// store.dispatch(counterAction.decrement());

// store.dispatch(dynamicCounterAction.increment(3));

// store.dispatch(dynamicCounterAction.increment(4));

// store.dispatch(dynamicCounterAction.decrement(2));

store.dispatch(fetchPosts());
