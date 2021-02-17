package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.models.Article;
import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthorController {
    @Autowired
    AuthorRepository authorRepository;

    @GetMapping("/authors")
    public ResponseEntity canGetAllAuthors() {
        return new ResponseEntity(authorRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "authors/{name}")
    public ResponseEntity getAuthor(@PathVariable String name) {
        return new ResponseEntity(authorRepository.findByNameIgnoreCase(name), HttpStatus.OK);
    }

//    @GetMapping(value = "authors/{id}")
//    public ResponseEntity getAuthorById(@PathVariable Long id) {
//        return new ResponseEntity(authorRepository.findById(id), HttpStatus.OK);
//    }
}
