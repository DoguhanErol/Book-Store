package com.mybookstore.backend.service;

import com.mybookstore.backend.model.OrderDetail;
import com.mybookstore.backend.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
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
