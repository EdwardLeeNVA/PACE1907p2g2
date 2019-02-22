package com.revature.dnd_generator.utilities;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.Connection;
import java.sql.SQLException;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.revature.dnd_generator.utilities.ConnectionHandler;

class ConnectionHandlerTest {
	
	private static ConnectionHandler handler;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		handler = ConnectionHandler.getInstance();
	}

	@Test
	void testGetConnection() {
		try (Connection connection = handler.getConnection() ) {
			assertNotNull(connection);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			fail();
		}
	}

}
