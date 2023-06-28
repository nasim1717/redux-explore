import { BOOKADD, BOOKDELETE, BOOKEDIT, BOOKFETCH, BOOKUPDATE, SEARCH } from "./actionTypes";

export const bookDisplay = (allBooks) => {
  return {
    type: BOOKFETCH,
    payload: allBooks,
  };
};

export const addBookDB = (books) => {
  return {
    type: BOOKADD,
    payload: books,
  };
};

export const bookEdit = (editBooks) => {
  return {
    type: BOOKEDIT,
    payload: editBooks,
  };
};

export const bookUpdate = (updateBooks) => {
  return {
    type: BOOKUPDATE,
    payload: updateBooks,
  };
};

export const deleteBooks = (bookId) => {
  return {
    type: BOOKDELETE,
    payload: bookId,
  };
};

export const search = (searchData) => {
  return {
    type: SEARCH,
    payload: searchData,
  };
};
