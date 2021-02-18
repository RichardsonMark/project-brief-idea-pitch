package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.models.Author;
import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AuthorController {
    @Autowired
    AuthorRepository authorRepository;

    @GetMapping(value = "/authors")
    public ResponseEntity canGetAllAuthors() {
        return new ResponseEntity(authorRepository.findAll(), HttpStatus.OK);
    }

//    @GetMapping(value = "authors/{name}")
//    public ResponseEntity getAuthor(@PathVariable String name) {
//        return new ResponseEntity(authorRepository.findByNameIgnoreCase(name), HttpStatus.OK);
//    }

    @GetMapping(value = "authors/{id}")
    public ResponseEntity getAuthorById(@PathVariable Long id) {
        return new ResponseEntity(authorRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/authors")
    public ResponseEntity<Author> createAuthor(@RequestBody Author author) {
        authorRepository.save(author);
        return new ResponseEntity<>(author, HttpStatus.CREATED);
    }

    @PatchMapping(value = "authors/{id}")
    public ResponseEntity<Author> updateAuthorById(@RequestBody Author author){
        authorRepository.save(author);
        return new ResponseEntity<>(author, HttpStatus.OK);
    }

    @DeleteMapping(value = "authors/{id}")
    public ResponseEntity deleteAuthorById(@PathVariable Long id){
        Author found = authorRepository.getOne(id);
        authorRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

//    @GetMapping("/authors")
//    public ResponseEntity<List<Author>> getAuthorInfo(
//            @RequestParam(name="name", required = false) String name,
//            @RequestParam(name="id", required = false) Long id
//    ){
//        if(name != null){
//            return new ResponseEntity(authorRepository.findByNameIgnoreCase(name), HttpStatus.OK);
//        }
//        if(id != null){
//            return new ResponseEntity(authorRepository.findById(id), HttpStatus.OK);
//        }
//        return new ResponseEntity(authorRepository.findAll(), HttpStatus.OK);
//    }

}
