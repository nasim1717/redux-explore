import React, { useEffect, useState } from "react";
import Book from "./Book";
import { useGetBooksQuery } from "../../../features/api/apiSlice";
import { useSelector } from "react-redux";

const BooksStore = () => {
  const { search } = useSelector((state) => state.searchBooks);
  const [checkFeatured, setCheckFeatured] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const { data: books = [], isLoading, isError, isSuccess, error } = useGetBooksQuery(search);
  console.log("books-->", books);

  useEffect(() => {
    if (checkFeatured) {
      const findeFeaturedBooks = books.filter((book) => book.featured === true);
      setAllBooks(findeFeaturedBooks);
    } else {
      setAllBooks(books);
    }
  }, [checkFeatured, isSuccess, books]);

  let content = null;
  if (isLoading) {
    content = <div>Loading......</div>;
  }
  if (!isLoading && isError) {
    content = <div>Error....</div>;
  }
  if (!isLoading && !isError && books?.length === 0) {
    content = <div>Books not found!</div>;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = allBooks.map((book) => <Book key={book.id} book={book}></Book>);
  }

  return (
    <>
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCheckFeatured(false)}
                className={`lws-filter-btn ${!checkFeatured ? "active-filter" : ""}`}
              >
                All
              </button>
              <button
                onClick={() => setCheckFeatured(true)}
                className={`lws-filter-btn ${checkFeatured ? "active-filter" : ""}`}
              >
                Featured
              </button>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Card 1 --> */}
            {content}
          </div>
        </div>
      </main>
    </>
  );
};

export default BooksStore;
