package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    @Autowired
    TeamRepository teamRepository;

    @GetMapping(value = "/teams")
    public ResponseEntity canGetAllAuthors() {
        return new ResponseEntity(teamRepository.findAll(), HttpStatus.OK);
    }

}
