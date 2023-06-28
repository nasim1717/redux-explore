import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../thunk/addBook";
import bookUpdateDB from "../thunk/bookUpdateDB";

const AddBooks = () => {
  const [featured, setFuatred] = useState(false);
  const editBook = useSelector((state) => state.editBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    setFuatred(editBook?.featured);
  }, [editBook]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.name.value;
    const author = form.author.value;
    const price = form.price.value;
    const imgUrl = form.thumbnail.value;
    const rating = form.rating.value;
    // const featured = form.featured.checked;
    const bookInfo = { name: bookName, author, price, thumbnail: imgUrl, rating, featured };

    console.log(bookInfo);
    if (!editBook?.id) {
      dispatch(addBook(bookInfo));
    } else {
      bookInfo.id = editBook.id;
      dispatch(bookUpdateDB(bookInfo));
    }
    event.target.reset();
  };

  const handleOnchange = (event) => {
    // eslint-disable-next-line no-unused-vars
    const { name, checked } = event.target;
    setFuatred(checked);
  };

  return (
    <>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={handleOnSubmit} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              defaultValue={editBook?.name && editBook.name}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              defaultValue={editBook?.author && editBook.author}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              defaultValue={editBook?.thumbnail && editBook.thumbnail}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                defaultValue={editBook?.price && editBook.price}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                defaultValue={editBook?.rating && editBook.rating}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              onChange={handleOnchange}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              checked={featured}
              className="w-4 h-4"
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          {editBook?.id ? (
            <button type="submit" className="submit" id="submit">
              Update Book
            </button>
          ) : (
            <button type="submit" className="submit" id="submit">
              Add Book
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddBooks;
