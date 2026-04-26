import AddBook from "./components/books/AddBook";
import BookList from "./components/books/BookList";
import Navbar from "./components/Navbar";
import { useRef } from "react";

function App() {
  const listRef = useRef();

  return (
    <div>
      <Navbar />
      <h1>Book App</h1>

      <AddBook onBookAdded={() => listRef.current.fetchBooks()} />

      <BookList ref={listRef} />
    </div>
  );
}

export default App;