import { deleteBooks } from "../redux/action";

const deleteBook = (bookDelete) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookDelete}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch(deleteBooks(bookDelete));
  };
};

export default deleteBook;
