package com.tufas.project.tufasgo.Repositories;

import com.tufas.project.tufasgo.Entities.Climb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ClimbRepository extends JpaRepository<Climb, String> {
}
