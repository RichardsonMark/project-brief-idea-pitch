package com.example.codeclan.pitchnotes.components;

import com.example.codeclan.pitchnotes.models.Article;
import com.example.codeclan.pitchnotes.models.Author;
import com.example.codeclan.pitchnotes.models.League;
import com.example.codeclan.pitchnotes.models.Team;
import com.example.codeclan.pitchnotes.repositories.ArticleRepository;
import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
import com.example.codeclan.pitchnotes.repositories.LeagueRepository;
import com.example.codeclan.pitchnotes.repositories.TeamRepository;
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

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    LeagueRepository leagueRepository;

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


        // team and league info - creating own api for MVP (may bring in real api for extension)
        League seriea = new League("Serie A", "https://crests.football-data.org/SA.svg");
        leagueRepository.save(seriea);
        League bundesliga = new League("Bundesliga", "https://crests.football-data.org/BL1.svg");
        leagueRepository.save(bundesliga);
        League laliga = new League("La Liga", "https://crests.football-data.org/SL1.svg");
        leagueRepository.save(laliga);


        Team intermilan = new Team("Inter Milan", "https://crests.football-data.org/108.svg", seriea, 22, "W W W D W", 15, 5, 2, 50, 54, 24, 30, 1 );
        teamRepository.save(intermilan);
        Team acmilan = new Team("AC Milan", "https://crests.football-data.org/98.svg", seriea, 22, "L W W L W", 15, 4, 3, 49, 45, 25, 20, 2 );
        teamRepository.save(acmilan);
        Team roma = new Team("Roma", "https://crests.football-data.org/100.svg", seriea, 22, "W L W W L", 13, 4, 5, 43, 47, 35, 12,3 );
        teamRepository.save(roma);
        Team juventus = new Team("Juventus", "https://crests.football-data.org/109.svg", seriea, 21, "L W W W L", 12, 6, 3, 42, 41, 19, 22,4);
        teamRepository.save(juventus);
        Team lazio = new Team("SS Lazio", "https://crests.football-data.org/110.svg", seriea, 22, "L W W W W", 12, 4, 6, 40, 37, 30, 7, 5 );
        teamRepository.save(lazio);
        Team napoli = new Team("SC Napoli", "https://crests.football-data.org/113.svg", seriea, 21, "W L W L W", 13, 1, 7, 40, 45, 21, 24, 6 );
        teamRepository.save(napoli);
        Team atalanta = new Team("Atalanta BC", "https://crests.football-data.org/102.svg", seriea, 22, "W D L W D", 11, 7, 4, 40, 49, 29, 20, 7 );
        teamRepository.save(atalanta);
        Team sassuolo = new Team("US Sassuolo Calcio", "https://crests.football-data.org/471.svg", seriea, 22, "W L W W L", 9, 7, 6, 34, 36, 33, 3, 8 );
        teamRepository.save(sassuolo);
    }
}
