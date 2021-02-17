package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorController {
    @Autowired
    AuthorRepository authorRepository;

    @GetMapping("/authors")
    public ResponseEntity canGetAllAuthors() {
        return new ResponseEntity(authorRepository.findAll(), HttpStatus.OK);
    }

}
