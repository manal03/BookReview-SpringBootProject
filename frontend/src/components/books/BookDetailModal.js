import { useState, useEffect } from "react";
import { getReviewsByBook, addReview } from "../../services/reviewService";
import "./BookDetailModal.css";

function BookDetailModal({ book, onClose }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviews();
  }, [book.id]);

  const fetchReviews = () => {
    setLoading(true);
    getReviewsByBook(book.id)
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      setError("Please enter a review comment");
      return;
    }

    setIsSubmitting(true);
    setError("");

    addReview(book.id, { rating, comment })
      .then((res) => {
        setReviews([...reviews, res.data]);
        setRating(5);
        setComment("");
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to add review");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {/* Book Header */}
        <div className="modal-header">
          {book.imageUrl && (
            <img src={book.imageUrl} alt={book.title} className="modal-book-image" />
          )}
          <div className="modal-book-info">
            <h2>{book.title}</h2>
            <p className="modal-author">by {book.author}</p>
            <p className="modal-genre">Genre: {book.genre}</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h3>Reviews ({reviews.length})</h3>
          
          {loading ? (
            <p>Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="no-reviews">No reviews yet. Be the first to review!</p>
          ) : (
            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <span className="review-rating">★ {review.rating}/5</span>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Review Section */}
        <div className="add-review-section">
          <h3>Add Your Review</h3>
          <form onSubmit={handleAddReview}>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts about this book..."
                rows="4"
              ></textarea>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookDetailModal;
