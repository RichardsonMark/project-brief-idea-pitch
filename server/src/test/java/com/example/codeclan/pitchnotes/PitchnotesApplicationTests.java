package com.example.codeclan.pitchnotes;

import com.example.codeclan.pitchnotes.models.Article;
import com.example.codeclan.pitchnotes.models.Author;
import com.example.codeclan.pitchnotes.models.League;
import com.example.codeclan.pitchnotes.models.Team;
import com.example.codeclan.pitchnotes.repositories.ArticleRepository;
import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
import com.example.codeclan.pitchnotes.repositories.LeagueRepository;
import com.example.codeclan.pitchnotes.repositories.TeamRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class PitchnotesApplicationTests {

	@Autowired
	AuthorRepository authorRepository;

	@Autowired
	ArticleRepository articleRepository;

	@Autowired
	TeamRepository teamRepository;

	@Autowired
	LeagueRepository leagueRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateSaveAuthorToDb(){
		Author mark = new Author("Mark Richardson" );
		authorRepository.save(mark);
	}

	@Test
	public void canCreateAndSaveArticleToDb(){
		Author mark = new Author("Mark Richardson" );
		authorRepository.save(mark);
		Article seriea1 = new Article("Headline goes here", mark, "Serie A", "Lede - byline goes here", "Story - Main story lorum ipsum", "11-02-2021 11:18:32", 35);
        articleRepository.save(seriea1);
	}

	@Test
	public void canFindArticleByAuthorName(){
		List<Article> foundArticles = articleRepository.findByAuthorNameIgnoreCase("mark richardson");
		assertEquals(1, foundArticles.size());
	}

	@Test
	public void canFindArticleByDate(){
		List<Article> foundArticles = articleRepository.findByDateIgnoreCase("11-02-2021 11:18:32");
		assertEquals(1, foundArticles.size());
	}

	@Test
	public void canFindArticleByCategoryLeague(){
		List<Article> foundArticles = articleRepository.findByCategoryLeagueIgnoreCase("serie a");
		assertEquals(1, foundArticles.size());
	}

	@Test
	public void canFindArticleByCategoryLeagueAndDate(){
		List<Article> foundArticles = articleRepository.findByCategoryLeagueIgnoreCaseAndDate("serie a", "11-02-2021 11:18:32");
		assertEquals(1, foundArticles.size());
	}

	@Test
	public void canFindAuthorByName(){
		List<Author> foundAuthors = authorRepository.findByNameIgnoreCase("mark richardson");
		assertEquals(1, foundAuthors.size());
	}

	@Test
	public void canCreateAndSaveLeagueToDb(){
		League seriea = new League("Serie A", "https://crests.football-data.org/SA.svg");
		leagueRepository.save(seriea);
	}

	@Test
	public void canCreateSaveTeamToDb(){
		League seriea = new League("Serie A", "https://crests.football-data.org/SA.svg");
		leagueRepository.save(seriea);
		Team juve = new Team("Juventus", "crest_url", seriea, 5, "W W W W W", 5, 5, 5, 5, 5, 5, 5, 4);
		teamRepository.save(juve);
	}

	@Test
	public void canFindTeamsInALeague(){
		League seriea = new League("Serie A", "https://crests.football-data.org/SA.svg");
		leagueRepository.save(seriea);
		Team juventus = new Team("Juventus", "https://crests.football-data.org/109.svg", seriea, 21, "L W W W L", 12, 6, 3, 42, 41, 19, 22,  4);
		teamRepository.save(juventus);
		Team intermilan = new Team("Inter Milan", "https://crests.football-data.org/108.svg", seriea, 22, "W W W D W", 15, 5, 2, 50, 54, 24, 30, 1 );
		teamRepository.save(intermilan);
		Team acmilan = new Team("AC Milan", "https://crests.football-data.org/98.svg", seriea, 22, "L W W L W", 15, 4, 3, 49, 45, 25, 20, 2 );
		teamRepository.save(acmilan);
		List<Team> foundTeams = teamRepository.findByLeague(seriea);
		assertEquals(3, foundTeams.size());
	}
}
