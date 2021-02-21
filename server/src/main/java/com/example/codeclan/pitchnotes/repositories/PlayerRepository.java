package com.example.codeclan.pitchnotes.repositories;

import com.example.codeclan.pitchnotes.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
}
