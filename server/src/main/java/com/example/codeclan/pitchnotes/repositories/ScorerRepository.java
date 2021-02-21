package com.example.codeclan.pitchnotes.repositories;

import com.example.codeclan.pitchnotes.models.League;
import com.example.codeclan.pitchnotes.models.Scorer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScorerRepository extends JpaRepository<Scorer, Long> {
    List<Scorer> findByLeague(League league);
}
