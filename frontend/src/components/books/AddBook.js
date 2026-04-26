import { useState } from "react";
import { createBook } from "../../services/bookService";
import "./AddBook.css"

function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [recentBooks, setRecentBooks] = useState([]);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bookreview"); // from Cloudinary

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/_/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrlToSend = "";
        if (imageUrl) {
      imageUrlToSend = await uploadImage(imageUrl);
    }

    const newBook = { title, author, genre, imageUrl: imageUrlToSend };

    createBook(newBook)
      .then((res) => {
        console.log("Book added:", res.data);
        setRecentBooks((prev) => {
        const updated = [res.data, ...prev];
        return updated.slice(0, 3);
         });
        // clear form
        setTitle("");
        setAuthor("");
        setGenre("");
        setImageUrl("");

       
        // refresh list (important)
        if (onBookAdded) {
          onBookAdded(res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
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
    
        <div style={{ padding: "20px" }}>
  <h2>Recently Added</h2>

  {recentBooks.length === 0 ? (
    <p>No recent books</p>
  ) : (
    recentBooks.map((book, index) => (
      <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        {book.imageUrl && (
          <img src={book.imageUrl} alt={book.title} width="80" />
        )}
        <p>{book.title} - {book.author}</p>
      </div>
      
    ))
  )}
</div>
</div>

    
  );


}

export default AddBook;