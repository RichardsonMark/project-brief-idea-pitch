package com.example.codeclan.pitchnotes.repositories;

import com.example.codeclan.pitchnotes.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
}
