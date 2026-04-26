import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { getBooks } from "../../services/bookService";

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
        books.map((book) => (
          <div key={book.id}>
            <p>{book.title} - {book.author}</p>
          </div>
        ))
      )}
    </div>
  );
}); // ✅ THIS was missing

export default BookList;