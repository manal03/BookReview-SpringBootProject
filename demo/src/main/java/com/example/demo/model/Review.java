package com.example.demo.model;
import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity 
public class Review {
    @Id // indicates a primary key (id is always unique)
    @GeneratedValue(strategy = GenerationType.IDENTITY) //let the ID be generated uniquely 
    private int id;
    private String comment;
    private double rating;

    public Review() {}

    public Review(String comment, double rating) {
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

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
    

    

    
}
