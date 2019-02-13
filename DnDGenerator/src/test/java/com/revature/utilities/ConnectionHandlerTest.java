package com.revature.utilities;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.Connection;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class ConnectionHandlerTest {
	
	private static ConnectionHandler handler;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		handler = ConnectionHandler.getInstance();
	}

	@Test
	void testGetConnection() {
		Connection connection = handler.getConnection();
		assertNotNull(connection);
	}

}
