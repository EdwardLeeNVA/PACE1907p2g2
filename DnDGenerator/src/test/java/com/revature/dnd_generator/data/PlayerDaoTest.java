package com.revature.dnd_generator.data;

import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.revature.dnd_generator.data.PlayerDao;
import com.revature.dnd_generator.exceptions.IncorrectLoginException;
import com.revature.dnd_generator.exceptions.UserRegistrationFailedException;

class PlayerDaoTest {
	
	private static PlayerDao dao;
	
	@BeforeAll
	static void setUpBeforeClass() {
		dao = PlayerDao.getInstance();
	}

	@Test
	void testLogIn() {
		try {
			int result = dao.logIn("EDLEE", "PASSWORD");
			System.out.print(result);
		} catch (IncorrectLoginException e) {
			fail(e);
		}
	}
	
	@Test
	void testInsertUser() {
		try {
			dao.insertUser("EDLEE", "PASSWORD");
		} catch (UserRegistrationFailedException e) {
			// TODO Auto-generated catch block
			fail(e);
		}
		System.out.print("Attempted user creation.");
	}

}
