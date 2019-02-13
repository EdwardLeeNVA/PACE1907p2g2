package com.revature.data;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.SQLException;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

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
		} catch (SQLException e) {
			fail(e);
		}
	}
	
	@Test
	void testCreateUser() {
		try {
			dao.createUser("EDLEE", "PASSWORD");
			System.out.print("User created.");
		} catch (SQLException e) {
			System.err.println(e);
		}
	}

}
