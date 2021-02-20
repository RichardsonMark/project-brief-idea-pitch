package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.repositories.FixtureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

@Repository
public class FixtureController {

    @Autowired
    FixtureRepository fixtureRepository;

    @GetMapping(value="/fixtures")
    public ResponseEntity canGetAllFixtures() {return new ResponseEntity(fixtureRepository.findAll(), HttpStatus.OK); }

}