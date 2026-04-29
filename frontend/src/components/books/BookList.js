import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { getBooks } from "../../services/bookService";
import BookItem from "./BookItem";
import "./BookList.css"

const BookList = forwardRef((props, ref) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    getBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useImperativeHandle(ref, () => ({
    fetchBooks
  }));

  return (
    <div>
      <h2>All Books</h2>

      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        <div className="books-container">
          {books.map((book) => (
            <BookItem key={book.id} book={book} onBookUpdate={fetchBooks} />
          ))}
        </div>
      )}
    </div>
  );
}); 

export default BookList;