package com.revature.dnd_generator.utilities;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.revature.dnd_generator.exceptions.ConnectionFailedException;

public class ConnectionHandler {
	
	private static final String USERNAME_LOCATION = "ConnectionUsername";
	private static final String PASSWORD_LOCATION = "ConnectionPassword";
	private static final String URL_LOCATION = "ConnectionURL";
	private static ConnectionHandler instance = new ConnectionHandler();

	public static ConnectionHandler getInstance() {
		return instance;
	}
	
	public Connection getConnection() {
		try {
			return initConnection();
		} catch (SQLException | IOException e) {
			throw new ConnectionFailedException(e);
		}
	}
	
	private static Connection initConnection() throws SQLException, IOException {
		String connectionUsername = System.getenv(USERNAME_LOCATION);
        String connectionPassword = System.getenv(PASSWORD_LOCATION);
        String url = System.getenv(URL_LOCATION);
		DriverManager.registerDriver (new oracle.jdbc.OracleDriver());
		return DriverManager.getConnection(url, connectionUsername, connectionPassword);
	}
	
	private ConnectionHandler() { }
}
