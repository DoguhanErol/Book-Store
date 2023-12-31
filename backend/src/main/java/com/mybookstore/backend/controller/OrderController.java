package com.mybookstore.backend.controller;

import com.mybookstore.backend.model.Order;
import com.mybookstore.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/order")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }
    @PostMapping("/add")
    public Order createOrder(@RequestBody Order order){
        return orderService.createOrder(order);
    }

}
