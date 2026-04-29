package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Book;
import com.example.demo.model.User;

public interface BookRepository extends JpaRepository<Book, Integer>{
    List<Book> findByUser(User user);
}
