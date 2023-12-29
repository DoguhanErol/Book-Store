package com.mybookstore.backend.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "\"order\"")
public class Order {
    //Constructor

    public Order() {
    }

    // Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="FIRST_NAME", length=100, nullable=false, unique=false)
    private String firstName;
    @Column(name="LAST_NAME", length=100, nullable=false, unique=false)
    private String lastName;

    @Column(name="EMAIL", length=100, nullable=false, unique=false)
    private String email;

    @Column(name="ADDRESS", nullable=false, unique=false)
    private String address;

    @Column(name="ORDER_DATE", nullable=false, unique=false)
    private LocalDate orderDate;

    @Column(name="TOTAL_PRICE", nullable=false, unique=false)
    private BigDecimal totalPrice;

    @Column(name="ORDER_STATUS", length=100, nullable=false, unique=false)
    private String orderStatus;

    //Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public BigDecimal getTotalPrice() {return totalPrice;}

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

}
