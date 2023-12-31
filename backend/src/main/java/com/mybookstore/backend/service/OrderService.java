package com.mybookstore.backend.service;

import com.mybookstore.backend.model.Order;
import com.mybookstore.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository){
        this.orderRepository=orderRepository;
    }
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }
}
