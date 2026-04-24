package com.example.demo.model;
import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity 
public class Review {
    @JsonManagedReference
    @Id // indicates a primary key (id is always unique)
    @GeneratedValue(strategy = GenerationType.IDENTITY) //let the ID be generated uniquely 
    private int id;
    private String comment;
    private int rating;

    public Review() {}

    public Review(String comment, int rating) {
        this.comment = comment;
        this.rating = rating;
    }

    @ManyToOne
    @JoinColumn(name = "book_id")
    @JsonBackReference
    private Book book;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
    

    

    
}
