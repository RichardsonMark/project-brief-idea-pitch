package com.example.codeclan.pitchnotes;

import com.example.codeclan.pitchnotes.models.Author;
import com.example.codeclan.pitchnotes.repositories.ArticleRepository;
import com.example.codeclan.pitchnotes.repositories.AuthorRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
}
