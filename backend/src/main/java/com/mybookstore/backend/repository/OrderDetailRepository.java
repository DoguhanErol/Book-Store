package com.mybookstore.backend.repository;

import com.mybookstore.backend.model.Order;
import com.mybookstore.backend.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetail,Long> {
}
