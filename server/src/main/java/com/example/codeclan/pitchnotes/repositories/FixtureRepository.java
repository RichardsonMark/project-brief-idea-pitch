package com.example.codeclan.pitchnotes.repositories;


import com.example.codeclan.pitchnotes.models.Fixture;
import com.example.codeclan.pitchnotes.models.League;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FixtureRepository extends JpaRepository<Fixture, Long> {
    List<Fixture> findByLeagueAndStatusIgnoreCase(League league, String status);
}
