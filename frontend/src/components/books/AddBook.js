import { useState } from "react";
import { createBook } from "../../services/bookService";
import "./AddBook.css"

function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, author };

    createBook(newBook)
      .then((res) => {
        console.log("Book added:", res.data);

        // clear form
        setTitle("");
        setAuthor("");
        setGenre("");
        setImageUrl("");

        // refresh list (important)
        if (onBookAdded) {
          onBookAdded();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="form-container">
      <h2>Add A Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageUrl(e.target.files[0])}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;