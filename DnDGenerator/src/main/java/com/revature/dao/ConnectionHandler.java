package com.revature.dao;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

class ConnectionHandler implements AutoCloseable {
	
	private static final String PROPERTIES_FILENAME = "connections.properties";
	
	private static ConnectionHandler instance = new ConnectionHandler();
	
	static ConnectionHandler getInstance() {
		return instance;
	}
	
	private static Connection connection;
	
	@Override
	public void close() throws Exception {
		if (connection != null) {
			connection.close();
		}
	}
	
	synchronized Connection getConnection() {
		try {
			if ((connection == null) || connection.isClosed()) {
				connection = initConnection();
			}
			return connection;
		} catch (SQLException | IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	private static Connection initConnection() throws SQLException, IOException {
		String connectionUsername;
        String connectionPassword;
        String url;
		try (BufferedReader reader = new BufferedReader(new FileReader(Thread.currentThread().getContextClassLoader().getResource(PROPERTIES_FILENAME).getPath()))) {
			connectionUsername = reader.readLine();
	        connectionPassword = reader.readLine();
	        url = reader.readLine();
		}
		DriverManager.registerDriver (new oracle.jdbc.OracleDriver());
		return DriverManager.getConnection(url, connectionUsername, connectionPassword);
	}
	
	private ConnectionHandler() { }
}
