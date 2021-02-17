package com.example.codeclan.pitchnotes.controllers;

import com.example.codeclan.pitchnotes.models.Article;
import com.example.codeclan.pitchnotes.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticleController {
    @Autowired
    ArticleRepository articleRepository;

    @GetMapping(value="/articles")
    public ResponseEntity canGetAllArticles() {return new ResponseEntity(articleRepository.findAll(), HttpStatus.OK); }

    @GetMapping(value = "/{name}/articles")
    public List<Article> getArticlesByAuthor(@PathVariable String name) {
        return articleRepository.findByAuthorNameIgnoreCase(name);
    }

    @GetMapping(value = "/articles/{categoryLeague}")
    public List<Article> getArticlesByCategory(@PathVariable String categoryLeague) {
        return articleRepository.findByCategoryLeagueIgnoreCase(categoryLeague);
    }

    @GetMapping(value = "/{date}/articles")
    public List<Article> getArticlesByDate(@PathVariable String date) {
        return articleRepository.findByDateIgnoreCase(date);
    }

}