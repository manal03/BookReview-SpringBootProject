package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Review;
import com.example.demo.model.Book;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.repository.BookRepository;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private BookRepository bookRepository;


     // 🔹 Delete review
    public void deleteReview(int id) {
        if (!reviewRepository.existsById(id)) {
            throw new RuntimeException("Review not found");
        }
        reviewRepository.deleteById(id);
    }

    // 🔹 Update review
    public Review updateReview(int id, Review updatedReview) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));

        review.setComment(updatedReview.getComment());
        review.setRating(updatedReview.getRating());

        return reviewRepository.save(review);
    }
    public List<Review> getReviewsByBook(int bookId) {
        return reviewRepository.findByBookId(bookId);
    }

    // 🔹 Add review to a book
    public Review addReview(int bookId, Review review) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));
        
        review.setBook(book);
        return reviewRepository.save(review);
    }
}
