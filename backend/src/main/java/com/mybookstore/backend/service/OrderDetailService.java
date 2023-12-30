package com.mybookstore.backend.service;

import com.mybookstore.backend.model.OrderDetail;
import com.mybookstore.backend.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class OrderDetailService {
    private final OrderDetailRepository orderDetailRepository;

    @Autowired
    public OrderDetailService(OrderDetailRepository orderDetailRepository){
        this.orderDetailRepository = orderDetailRepository;
    }

    public Optional<OrderDetail> getOrderDetailsByOrderId(Long orderId) {
        return orderDetailRepository.findById(orderId);
    }
}
