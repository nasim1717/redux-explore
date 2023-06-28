import { addBookDB } from "../redux/action";

const addBook = (books) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset = UTF-8",
      },
      body: JSON.stringify(books),
    });
    const res = await response.json();
    // console.log(res);
    dispatch(addBookDB(res));
  };
};

export default addBook;
