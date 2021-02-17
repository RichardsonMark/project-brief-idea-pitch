package com.example.codeclan.pitchnotes.repositories;

import com.example.codeclan.pitchnotes.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
