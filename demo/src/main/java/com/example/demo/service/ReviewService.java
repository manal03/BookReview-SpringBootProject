package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepository;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;


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
    
}
