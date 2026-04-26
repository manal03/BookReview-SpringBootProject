import { useState } from "react";
import BookDetailModal from "./BookDetailModal";
import "./BookItem.css";

function BookItem({ book }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="book-item" onClick={() => setShowModal(true)}>
        {book.imageUrl && (
          <img src={book.imageUrl} alt={book.title} className="book-image" />
        )}
        <div className="book-info">
          <h3>{book.title}</h3>
          <p className="author">{book.author}</p>
        </div>
      </div>
      
      {showModal && (
        <BookDetailModal book={book} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default BookItem;
