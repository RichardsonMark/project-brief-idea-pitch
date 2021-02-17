package com.example.codeclan.pitchnotes.components;

import com.example.codeclan.pitchnotes.models.Article;
import com.example.codeclan.pitchnotes.models.Author;
import com.example.codeclan.pitchnotes.repositories.ArticleRepository;
import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.time.Month;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    ArticleRepository articleRepository;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Author markRichardson = new Author("Mark Richardson");
        authorRepository.save(markRichardson);
        Author aNAuthor = new Author("A N Author");
        authorRepository.save(aNAuthor);
        Author alanSmithee = new Author("Alan Smithee");
        authorRepository.save(alanSmithee);
        Author cordwainerBird = new Author("Cordwainer Bird");
        authorRepository.save(cordwainerBird);
        Author johnDoe = new Author("John Doe");
        authorRepository.save(johnDoe);
        Author janeDoe = new Author("Jane Doe");
        authorRepository.save(janeDoe);

        Article seriea1 = new Article("Headline goes here", markRichardson, "Serie A", "Lede - byline goes here", "Story - Main story lorum ipsum", "11-02-2021 11:18:32", 35);
        articleRepository.save(seriea1);
        Article laliga1 = new Article("Headline goes here", aNAuthor, "La Liga", "Lede - byline goes here", "Story - Main story lorum ipsum", "13-02-2021 11:18:32", 30);
        articleRepository.save(laliga1);
        Article bundesliga1 = new Article("Headline goes here", alanSmithee, "Bundesliga", "Lede - byline goes here", "Story - Main story lorum ipsum", "14-02-2021 11:18:32", 25);
        articleRepository.save(bundesliga1);
        Article ligueUn1 = new Article("Headline goes here", cordwainerBird, "Ligue 1", "Lede - byline goes here", "Story - Main story lorum ipsum", "15-02-2021 11:18:32", 20);
        articleRepository.save(ligueUn1);
        Article eredivisie1 = new Article("Headline goes here", johnDoe, "Eredivisie", "Lede - byline goes here", "Story - Main story lorum ipsum", "16-02-2021 11:18:32", 15);
        articleRepository.save(eredivisie1);
        Article premierLeague1 = new Article("Headline goes here", janeDoe, "Premier League", "Lede - byline goes here", "Story - Main story lorum ipsum", "17-02-2021 11:18:32", 10);
        articleRepository.save(premierLeague1);
    }
}
