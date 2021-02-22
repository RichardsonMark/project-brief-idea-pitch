package com.example.codeclan.pitchnotes.repositories;

import com.example.codeclan.pitchnotes.models.League;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeagueRepository extends JpaRepository<League, Long> {
}
