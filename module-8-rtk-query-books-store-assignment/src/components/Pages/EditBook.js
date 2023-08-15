import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice";
import EditFrom from "../EditFrom/EditFrom";

const EditBook = () => {
  const { bookId } = useParams();
  const { data: bookInfo, isLoading, isError, isSuccess } = useGetBookQuery(bookId);

  let content = null;
  if (isLoading) {
    content = <div>Loading......</div>;
  }
  if (!isLoading && isError) {
    content = <div>Error....</div>;
  }
  if (!isLoading && !isError) {
    content = <EditFrom editBook={bookInfo}></EditFrom>;
  }

  return (
    <>
      <main className="py-6 2xl:px-6">
        <div className="container">{content}</div>
      </main>
    </>
  );
};

export default EditBook;
