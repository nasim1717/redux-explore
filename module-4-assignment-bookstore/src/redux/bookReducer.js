import { BOOKADD, BOOKDELETE, BOOKEDIT, BOOKFETCH, BOOKUPDATE, SEARCH } from "./actionTypes";
import initialState from "./initialState";

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKFETCH:
      return {
        ...state,
        books: [...action.payload],
      };
    case BOOKADD:
      return {
        ...state,
        books: [...state.books, { ...action.payload }],
        search: {},
      };
    case BOOKEDIT:
      return {
        ...state,
        editBooks: action.payload,
        // search: {},
      };
    case BOOKUPDATE:
      return {
        ...state,
        books: [
          ...state.books.map((book) => {
            if (book.id !== action.payload.id) {
              return book;
            } else {
              return action.payload;
            }
          }),
        ],
        editBooks: {},
        // search: {},
      };
    case BOOKDELETE:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload)],
        // search: {},
      };
    case SEARCH:
      return {
        ...state,
        search: {
          value: action.payload,
        },
      };
    default:
      return state;
  }
};

export default booksReducer;
