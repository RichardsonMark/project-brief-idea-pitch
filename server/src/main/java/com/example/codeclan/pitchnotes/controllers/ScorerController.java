package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.models.League;
import com.example.codeclan.pitchnotes.repositories.ScorerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScorerController {

    @Autowired
    ScorerRepository scorerRepository;

    @GetMapping(value="/scorers")
    public ResponseEntity canGetAllFixtures() {return new ResponseEntity(scorerRepository.findAll(), HttpStatus.OK); }

    @GetMapping(value="/scorers/{league}")
    public ResponseEntity canGetByLeagueIgnoreCase(@RequestBody League league) {
        return new ResponseEntity(scorerRepository.findByLeague(league), HttpStatus.OK);
    }


}
