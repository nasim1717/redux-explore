import React, { useState } from "react";
import { useEditBooksMutation } from "../../features/api/apiSlice";

const EditFrom = ({ editBook }) => {
  const [editBooks, { isLoading, isError }] = useEditBooksMutation();
  const { name, author, thumbnail, price, rating, featured, id } = editBook;
  const [editFeatured, setFeatured] = useState(featured);
  const [editName, setEditName] = useState(name);
  const [editAuthor, setEditAuthor] = useState(author);
  const [editThumbnail, setThumbnail] = useState(thumbnail);
  const [editPrice, setEditPrcie] = useState(price);
  const [editRating, setRating] = useState(rating);

  const handleEditFrom = (e) => {
    e.preventDefault();
    editBooks({
      id,
      data: {
        name: editName,
        author: editAuthor,
        thumbnail: editThumbnail,
        price: editPrice,
        rating: editRating,
        featured: editFeatured,
      },
    });
  };

  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
      <form onSubmit={handleEditFrom} className="book-form">
        <div className="space-y-2">
          <label htmlFor="lws-bookName">Book Name</label>
          <input
            onChange={(e) => setEditName(e.target.value)}
            required
            className="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            value={editName}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-author">Author</label>
          <input
            onChange={(e) => setEditAuthor(e.target.value)}
            required
            className="text-input"
            type="text"
            id="lws-author"
            name="author"
            value={editAuthor}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-thumbnail">Image Url</label>
          <input
            onChange={(e) => setThumbnail(e.target.value)}
            required
            className="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
            value={editThumbnail}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="lws-price">Price</label>
            <input
              onChange={(e) => setEditPrcie(e.target.value)}
              required
              className="text-input"
              type="number"
              id="lws-price"
              name="price"
              value={editPrice}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-rating">Rating</label>
            <input
              onChange={(e) => setRating(e.target.value)}
              required
              className="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
              value={editRating}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            onChange={() => setFeatured(!editFeatured)}
            id="lws-featured"
            type="checkbox"
            name="featured"
            checked={editFeatured}
            className="w-4 h-4"
          />
          <label htmlFor="lws-featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="lws-submit">
          Edit Book
        </button>
      </form>
      {!isLoading && isError && (
        <div style={{ color: "red", fontSize: "20px" }}>Book Not Edited</div>
      )}
    </div>
  );
};

export default EditFrom;
