import { bookUpdate } from "../redux/action";

const bookUpdateDB = (updateBook) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${updateBook.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json; charset = UTF-8",
      },
      body: JSON.stringify(updateBook),
    });
    dispatch(bookUpdate(updateBook));
  };
};

export default bookUpdateDB;
