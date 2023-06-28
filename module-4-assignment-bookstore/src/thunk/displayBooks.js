import { bookDisplay } from "../redux/action";

const displayBooks = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const data = await response.json();
    console.log("books data", data);
    dispatch(bookDisplay(data));
  };
};

export default displayBooks;
