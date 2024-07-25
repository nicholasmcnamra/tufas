package com.tufas.project.tufasgo.Repositories;

import com.tufas.project.tufasgo.Entities.ClimbLog;
import com.tufas.project.tufasgo.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface ClimbLogRepository extends JpaRepository<ClimbLog, Long> {
    Iterable<ClimbLog> findByUser(@Param("user") User user);
}
