package com.example.codeclan.pitchnotes;

import com.example.codeclan.pitchnotes.models.Article;
import com.example.codeclan.pitchnotes.models.Author;
import com.example.codeclan.pitchnotes.repositories.ArticleRepository;
import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
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
	public void canFndArticleByAuthorName(){
		List<Article> foundArticles = articleRepository.findByAuthorName("Mark Richardson");
		assertEquals(1, foundArticles.size());
	}
}
