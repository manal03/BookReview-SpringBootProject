package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import com.example.demo.model.Book;
import com.example.demo.model.Review;
import com.example.demo.model.User;

import java.util.List;
import com.example.demo.repository.*;;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Book> getAllBooks() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username);
        return bookRepository.findByUser(user);
    }

    public Book getBookById(int id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));
    }

    public Book createBook(Book book) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username);
        book.setUser(user);
        return bookRepository.save(book);
    }

    public Review addReview(int bookId, Review review) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        review.setBook(book);
        return reviewRepository.save(review);
    }


     public void deleteBook(int id) {
        Book book = bookRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Book not found"));
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        if (!book.getUser().getUsername().equals(username)) {
        throw new RuntimeException("Not authorized");
        }

        bookRepository.delete(book);
    }


    
    

}

