package com.example.codeclan.pitchnotes;

import com.example.codeclan.pitchnotes.models.Author;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PitchnotesApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateSaveAuthorToDb(){
		Author author = new Author("Mark R" )
	}
}
