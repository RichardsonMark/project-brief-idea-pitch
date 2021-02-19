package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.repositories.LeagueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class LeagueController {

    @Autowired
    LeagueRepository leagueRepository;

    @GetMapping(value = "/leagues")
    public ResponseEntity canGetAllAuthors() {
        return new ResponseEntity(leagueRepository.findAll(), HttpStatus.OK);
    }

}

