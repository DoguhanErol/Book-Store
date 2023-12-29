package com.mybookstore.backend.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "BOOK")
public class Book {
    //Constructor
    public Book() {
    }

    // Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="TITLE", length=100, nullable=false, unique=false)
    private String title;
    @Column(name="AUTHOR", length=100, nullable=false, unique=false)
    private String author;

    @Column(name="PUBLICATION_DATE", nullable=false, unique=false)
    private LocalDate publicationDate;

    @Column(name="PRICE", nullable=false, unique=false)
    private BigDecimal price;

    @Column(name="CATEGORY",length = 80, nullable=false, unique=false)
    private String category;


    //Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDate getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(LocalDate publicationDate) {
        this.publicationDate = publicationDate;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


}
