package com.example.demo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.model.Book;
import com.example.demo.model.Review;
import com.example.demo.security.JwtUtil;
import com.example.demo.service.BookService;
import org.springframework.web.bind.annotation.RequestHeader;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

@GetMapping
public List<Book> getBooks(Authentication authentication) {
    String username = authentication.getName();
    System.out.println("Logged in user: " + username);
    return bookService.getAllBooks();
}

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable int id) {
        bookService.deleteBook(id);
    }

    @PutMapping("/{id}")
public Book updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
    Book book = bookService.getBookById(id);

    book.setTitle(updatedBook.getTitle());
    book.setAuthor(updatedBook.getAuthor());
    book.setGenre(updatedBook.getGenre());
    book.setImageUrl(updatedBook.getImageUrl());

    return bookService.createBook(book);
}


    @PostMapping("/{bookId}/reviews")
    public Review addReview(@PathVariable int bookId, @RequestBody Review review) {
        return bookService.addReview(bookId, review);
    }

}
