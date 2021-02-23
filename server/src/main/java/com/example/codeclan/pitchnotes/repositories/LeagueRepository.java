package com.example.codeclan.pitchnotes.repositories;

import com.example.codeclan.pitchnotes.models.League;
import com.example.codeclan.pitchnotes.models.Scorer;
import com.example.codeclan.pitchnotes.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeagueRepository extends JpaRepository<League, Long> {
//    List<Scorer> findByLeagueId(Long id);

}
