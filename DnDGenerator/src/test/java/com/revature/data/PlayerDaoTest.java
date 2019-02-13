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
	void testLogin() {
		try {
			int result = dao.login("EDLEE", "PASSWORD");
			System.out.print(result);
		} catch (SQLException e) {
			fail(e);
		}
	}

}
