import { useDispatch, useSelector } from "react-redux";
import AddBooks from "./AddBooks";
import { useEffect, useState } from "react";
import displayBooks from "../thunk/displayBooks";
import BooksCard from "./BooksCard";

const BookList = () => {
  const booksData = useSelector((state) => state.books);
  const bookSearch = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [booksFilter, setBooksFilter] = useState(true);
  const [booksFilterData, setBooksFilterData] = useState([]);

  useEffect(() => {
    dispatch(displayBooks());
  }, [dispatch]);

  useEffect(() => {
    if (bookSearch?.value) {
      const searchBooks = booksData.filter((book) =>
        book.name.toLowerCase().includes(bookSearch.value.toLowerCase())
      );
      setBooksFilterData(searchBooks);
    } else {
      setBooksFilterData(booksData);
    }
  }, [booksData, bookSearch]);

  const allBookHanlder = () => {
    setBooksFilter(true);
  };

  const featuredBooks = () => {
    setBooksFilter(false);
  };

  return (
    <>
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>

              <div className="flex items-center space-x-4">
                <button
                  onClick={allBookHanlder}
                  className={`filter-btn ${booksFilter && "active-filter"}`}
                  id="lws-filterAll"
                >
                  All
                </button>
                <button
                  onClick={featuredBooks}
                  className={`filter-btn ${!booksFilter && "active-filter"}`}
                  id="lws-filterFeatured"
                >
                  Featured
                </button>
              </div>
            </div>
            <div className="lws-bookContainer">
              {booksFilter
                ? booksFilterData.map((book) => <BooksCard key={book.id} book={book}></BooksCard>)
                : booksFilterData.map((book) => {
                    if (book.featured) {
                      return <BooksCard key={book.id} book={book}></BooksCard>;
                    }
                  })}
            </div>
          </div>
          <div>
            <AddBooks></AddBooks>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookList;
