package com.revature.data;

import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.revature.exceptions.IncorrectLoginException;

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
	void testCreateUser() {
		dao.createUser("EDLEE", "PASSWORD");
		System.out.print("Attempted user creation.");
	}

}
