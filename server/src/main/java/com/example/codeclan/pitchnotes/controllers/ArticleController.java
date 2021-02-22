package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.models.Article;
import com.example.codeclan.pitchnotes.models.Author;
import com.example.codeclan.pitchnotes.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ArticleController {
    @Autowired
    ArticleRepository articleRepository;

    @GetMapping(value = "/articles/{id}")
    public ResponseEntity getArticle(@PathVariable Long id) {
        return new ResponseEntity<>(articleRepository.findById(id), HttpStatus.OK);
    }

//    @GetMapping(value="/articles")
//    public ResponseEntity<List<Article>> canGetAllArticles(
//            @RequestParam(name="categoryLeague", required = false) String categoryLeague,
//            @RequestParam(name="date", required = false) String date
//    ) {
//        if(categoryLeague != null){
//            return new ResponseEntity<>(articleRepository.findByCategoryLeagueIgnoreCase(categoryLeague), HttpStatus.OK);
//        }
//        if(date != null){
//            return new ResponseEntity<>(articleRepository.findByDateIgnoreCase(date), HttpStatus.OK);
//        }
//        if(date != null && categoryLeague != null) {
//            return new ResponseEntity<>(articleRepository.findByCategoryLeagueIgnoreCaseAndDate(categoryLeague, date), HttpStatus.OK);
//        }
//        return new ResponseEntity<>(articleRepository.findAll(), HttpStatus.OK);
//    }

    @GetMapping(value="/articles")
    public ResponseEntity<List<Article>> canGetAllArticles() {
        return new ResponseEntity<>(articleRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping(value = "/{name}/articles")
    public ResponseEntity<List<Article>> getArticlesByAuthor(@PathVariable String name) {
        return new ResponseEntity<>(articleRepository.findByAuthorNameIgnoreCase(name), HttpStatus.OK);
    }

    @GetMapping(value = "/articles/league/{categoryLeague}")
    public ResponseEntity getArticleByCategoryLeague(@PathVariable String categoryLeague) {
        return new ResponseEntity<>(articleRepository.findByCategoryLeagueIgnoreCase(categoryLeague), HttpStatus.OK);
    }

    @GetMapping(value = "/articles/read")
    public ResponseEntity getArticleReadingVersionOrderByNewest() {
        return new ResponseEntity<>(articleRepository.findByOrderByDateAsc(), HttpStatus.OK);
    }

    @GetMapping(value = "/articles/read/{date}")
    public ResponseEntity getArticleReadingVersionByDate(@PathVariable String date) {
        return new ResponseEntity<>(articleRepository.findByDateIgnoreCase(date), HttpStatus.OK);
    }

    @PostMapping(value = "/articles")
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        articleRepository.save(article);
        return new ResponseEntity<>(article, HttpStatus.CREATED);
    }

    @PatchMapping(value = "articles/{id}")
    public ResponseEntity<Article> updateArticle(@RequestBody Article article){
        articleRepository.save(article);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @DeleteMapping(value = "articles/{id}")
    public ResponseEntity deleteArticle(@PathVariable Long id){
        Article found = articleRepository.getOne(id);
        articleRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}