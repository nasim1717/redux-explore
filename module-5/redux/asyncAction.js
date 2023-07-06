const fetch = require("node-fetch");
const { applyMiddleware } = require("redux");
const { createStore } = require("redux");
const thunkMiddleware = require("redux-thunk");

// initialState
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fetchPostsRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostsSucceded = (posts) => {
  return {
    type: "posts/succeded",
    payload: posts,
  };
};

const fetchPostsFaild = (error) => {
  return {
    type: "posts/failed",
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "posts/succeded":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "posts/failed":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        posts: [],
      };
  }
};

// thunk function
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequested());
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const posts = await response.json();
      dispatch(fetchPostsSucceded(posts));
    } catch (error) {
      dispatch(fetchPostsFaild(error));
    }
  };
};

// create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(fetchPosts());
