package com.example.codeclan.pitchnotes.components;

import com.example.codeclan.pitchnotes.models.*;
import com.example.codeclan.pitchnotes.repositories.*;
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

    @Autowired
    FixtureRepository fixtureRepository;

    @Autowired
    ScorerRepository scorerRepository;

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
        Article seriea1_2 = new Article("Headline goes here", markRichardson, "Serie A", "Lede - byline goes here", "Story - Main story lorum ipsum", "11-02-2021 11:18:32", 35);
        articleRepository.save(seriea1_2);
        Article laliga1_2 = new Article("Headline goes here", aNAuthor, "La Liga", "Lede - byline goes here", "Story - Main story lorum ipsum", "13-02-2021 11:18:32", 30);
        articleRepository.save(laliga1_2);
        Article bundesliga1_2 = new Article("Headline goes here", alanSmithee, "Bundesliga", "Lede - byline goes here", "Story - Main story lorum ipsum", "14-02-2021 11:18:32", 25);
        articleRepository.save(bundesliga1_2);



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
        Team hellas = new Team("Hellas Verona FC", "https://crests.football-data.org/450.svg", seriea, 22, "W,L,L,W,L", 9, 6, 7, 33, 28, 24, 4, 9 );
        teamRepository.save(hellas);
        Team sampdoria = new Team("UC Sampdoria", "https://crests.football-data.org/584.svg", seriea, 22, "W,D,L,W,W", 9, 3, 10, 30, 33, 33, 0, 10 );
        teamRepository.save(sampdoria);
        Team genoa = new Team("Genoa CFC", "https://crests.football-data.org/107.svg", seriea, 22, "D,W,W,W,D", 6, 7, 9, 25, 24, 31, -7,11 );
        teamRepository.save(genoa);
        Team fiorentina = new Team("ACF Fiorentina", "https://crests.football-data.org/99.svg", seriea, 23, "W,L,L,D,W", 6, 7, 10, 25, 25, 35, -10,12);
        teamRepository.save(fiorentina);
        Team spezia = new Team("Spezia Calcio", "https://crests.football-data.org/488.svg", seriea, 23, "L,W,W,L,L", 6, 6, 11, 24, 30, 41, -11, 13 );
        teamRepository.save(spezia);
        Team benevento = new Team("Benevento Calcio", "https://crests.football-data.org/1106.svg", seriea, 22, "D,D,L,D,L", 6, 6, 10, 24, 25, 42, -17, 14 );
        teamRepository.save(benevento);
        Team udinese = new Team("Udinese Calcio", "https://crests.football-data.org/115.svg", seriea, 22, "L,W,W,D,D", 6, 6, 10, 24, 23, 31, -8, 15 );
        teamRepository.save(udinese);
        Team bologna = new Team("Bologna FC 1909", "https://crests.football-data.org/103.svg", seriea, 22, "D,W,L,L,W", 6, 6, 10, 24, 29, 36, -7, 16 );
        teamRepository.save(bologna);
        Team torino = new Team("Torino FC", "https://crests.football-data.org/586.svg", seriea, 23, "W,D,D,D,D", 3, 11, 9, 20, 33, 41, -8, 17 );
        teamRepository.save(torino);
        Team cagliari = new Team("Cagliari Calcio", "https://crests.football-data.org/104.svg", seriea, 21, "L,L,L,D,L", 3, 6, 14, 15, 24, 41, -17, 18 );
        teamRepository.save(cagliari);
        Team parma = new Team("Parma Calcio 1913", "https://crests.football-data.org/112.svg", seriea, 22, "L,L,L,L,D", 2, 7, 13, 13, 15, 43, -28, 19 );
        teamRepository.save(parma);
        Team crotone = new Team("FC Crotone", "https://crests.football-data.org/472.svg", seriea, 22, "L,L,L,L,W", 3, 3, 16, 12, 23, 52, -29, 20 );
        teamRepository.save(crotone);

        Team bayern = new Team("Bayern Munich", "https://crests.football-data.org/5.svg", bundesliga, 22, "L,D,W,W,W", 15, 4, 3, 49, 62, 31, 31, 1 );
        teamRepository.save(bayern);
        Team leipzig = new Team("RB Leipzig", "https://crests.football-data.org/721.svg", bundesliga, 22, "W,W,W,L,W", 13, 5, 3, 44, 39, 18, 21, 2 );
        teamRepository.save(leipzig);
        Team wolfsburg = new Team("VfL Wolfsburg", "https://crests.football-data.org/11.svg", bundesliga, 22, "W,D,W,W,W", 11, 9, 2, 42, 35, 19, 16, 3 );
        teamRepository.save(wolfsburg);
        Team eintrachtFrankfurt = new Team("Eintracht Frankfurt", "https://crests.football-data.org/19.svg", bundesliga, 22, "W,W,W,W,W", 11, 9, 2, 42, 45, 30, 15, 4 );
        teamRepository.save(eintrachtFrankfurt);
        Team bayerLeverkusen = new Team("Bayer 04 Leverkusen", "https://crests.football-data.org/3.svg", bundesliga, 22, "D,D,W,L,L", 10, 7, 5, 40, 40, 24, 16, 5 );
        teamRepository.save(bayerLeverkusen);
        Team dortmund = new Team("Borussia Dortmund", "https://crests.football-data.org/4.svg", bundesliga, 22, "W,D,L,W,L", 11, 3, 8, 36, 45, 31, 14, 6 );
        teamRepository.save(dortmund);


        Fixture fioSpezia = new Fixture(seriea, "FINISHED", 23, 3, 0, "Fiorentina", "https://crests.football-data.org/99.svg", "Spezia Calcio", "https://crests.football-data.org/488.svg");
        fixtureRepository.save(fioSpezia);
        Fixture parmaUdi = new Fixture(seriea, "FINISHED", 23, 2, 2, "Parma", "https://crests.football-data.org/112.svg", "Udinese", "https://crests.football-data.org/115.svg");
        fixtureRepository.save(parmaUdi);
        Fixture cagTor = new Fixture(seriea, "FINISHED", 23, 0, 1, "Cagliari", "https://crests.football-data.org/104.svg", "Torino", "https://crests.football-data.org/586.svg");
        fixtureRepository.save(cagTor);
        Fixture milanInter = new Fixture(seriea, "FINISHED", 23, 0, 3, "Milan", "https://crests.football-data.org/98.svg", "Inter Milan", "https://crests.football-data.org/108.svg");
        fixtureRepository.save(milanInter);
        Fixture lazioSamp = new Fixture(seriea, "FINISHED", 23, 1, 0, "Lazio", "https://crests.football-data.org/110.svg", "Sampdoria", "https://crests.football-data.org/584.svg");
        fixtureRepository.save(lazioSamp);
        Fixture ataNap = new Fixture(seriea, "FINISHED", 23, 4, 2, "Atalanta", "https://crests.football-data.org/102.svg", "Napoli", "https://crests.football-data.org/113.svg");
        fixtureRepository.save(ataNap);
        Fixture genVer = new Fixture(seriea, "FINISHED", 23, 2, 2, "Genoa", "https://crests.football-data.org/107.svg", "Hellas Verona", "https://crests.football-data.org/450.svg");
        fixtureRepository.save(genVer);
        Fixture beneRoma = new Fixture(seriea, "FINISHED", 23, 0, 0, "Benevento", "https://crests.football-data.org/1106.svg", "Roma", "https://crests.football-data.org/100.svg");
        fixtureRepository.save(beneRoma);
        Fixture sassBol = new Fixture(seriea, "IN_PLAY", 23, 1, 1, "Sassuolo", "https://crests.football-data.org/471.svg", "Bologna", "https://crests.football-data.org/103.svg");
        fixtureRepository.save(sassBol);
        Fixture juvCro = new Fixture(seriea, "IN_PLAY", 23, 3, 0, "Juventus", "https://crests.football-data.org/109.svg", "Crotone", "https://crests.football-data.org/472.svg");
        fixtureRepository.save(juvCro);

        Fixture bayerndortmund = new Fixture(bundesliga, "FINISHED", 23, 2, 1, "Bayern Munich", "https://crests.football-data.org/5.svg", "Borussia Dortmund", "https://crests.football-data.org/4.svg");
        fixtureRepository.save(bayerndortmund);


        Scorer cronaldo = new Scorer(seriea, juventus, "Cristiano Ronaldo", "1985-02-05", "Portugal", "Attacker", 16);
        scorerRepository.save(cronaldo);
        Scorer zlatan = new Scorer(seriea, acmilan, "Zlatan Ibrahimovic", "1981-10-03", "Sweden", "Attacker", 14);
        scorerRepository.save(zlatan);
        Scorer immobile = new Scorer(seriea, lazio, "Ciro Immobile", "1990-02-20", "Italy", "Attacker", 14);
        scorerRepository.save(immobile);
        Scorer luisMuriel = new Scorer(seriea, atalanta, "Luis Muriel", "1991-04-16", "Colombia", "Attacker", 13);
        scorerRepository.save(luisMuriel);
        Scorer belotti = new Scorer(seriea, torino, "Andrea Belotti", "1993-12-20", "Italy", "Attacker", 11);
        scorerRepository.save(belotti);
        Scorer lautaroMartínez = new Scorer(seriea, intermilan, "Lautaro Martínez", "1997-08-22", "Argentina", "Attacker", 11);
        scorerRepository.save(lautaroMartínez);
        Scorer joaoPedro = new Scorer(seriea, cagliari, "João Pedro Galvão", "1992-03-09", "Brazil", "Attacker", 11);
        scorerRepository.save(joaoPedro);
        Scorer insigne = new Scorer(seriea, napoli, "Lorenzo Insigne", "1991-06-04", "Italy", "Attacker", 10);
        scorerRepository.save(insigne);
        Scorer caputo = new Scorer(seriea, sassuolo, "Francesco Caputo", "1987-08-06", "Italy", "Attacker", 10);
        scorerRepository.save(caputo);

        Scorer lewandowski = new Scorer(bundesliga, bayern, "Robert Lewandowski", "1988-08-21", "Poland", "Attacker", 26);
        scorerRepository.save(lewandowski);
        Scorer haaland = new Scorer(bundesliga, dortmund, "Erling Haaland", "2000-07-21", "Norway", "Attacker", 17);
        scorerRepository.save(haaland);

    }
}
