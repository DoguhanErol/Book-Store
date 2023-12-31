package com.mybookstore.backend.controller;

import com.mybookstore.backend.model.Book;
import com.mybookstore.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/book")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/{category}")
    public List<Book> getBooksByCategory(@PathVariable String category){
        return bookService.getBooksByCategory(category);
    }
    @PostMapping
    public Book createBook(@RequestBody Book book){
        return bookService.saveBook(book);
    }
}
