import { useState } from "react";
import BookDetailModal from "./BookDetailModal";
import "./BookItem.css";
import { deleteBook } from "../../services/bookService";

function BookItem({ book, onBookUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [editBook, setEditBook] = useState(null);

  const handleDelete = (id) => { 
    deleteBook(id) .then(() => { 
      setShowModal(false);
      if (onBookUpdate) onBookUpdate();
        }) .catch((err) => console.error(err)); };
  
  const handleEdit = (book) => {
  console.log("Edit:", book);
};

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
  <BookDetailModal
    book={book}
    onEdit={handleEdit}
    onDelete={handleDelete}
    onClose={() => setShowModal(false)}
    onSave={() => {
      setShowModal(false);
      if (onBookUpdate) onBookUpdate();
    }}
  />
)}
    </>
  );
}

export default BookItem;
