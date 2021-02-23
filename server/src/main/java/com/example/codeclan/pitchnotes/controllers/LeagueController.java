package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.models.League;
import com.example.codeclan.pitchnotes.repositories.LeagueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class LeagueController {

    @Autowired
    LeagueRepository leagueRepository;

    @GetMapping(value = "/leagues")
    public ResponseEntity canGetAllLeagues() {
        return new ResponseEntity(leagueRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "leagues/{id}")
    public ResponseEntity getLeaguesById(@PathVariable Long id) {
        return new ResponseEntity(leagueRepository.findById(id), HttpStatus.OK);
    }

//    @GetMapping(value = "leagues/{id}/scorers")
//    public ResponseEntity getScorersInLeagues(@PathVariable Long id) {
//        return new ResponseEntity(leagueRepository.findByLeagueId(id), HttpStatus.OK);
//    }

}

