package com.revature.utilities;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

public class ConnectionHandler implements AutoCloseable {
	
	private static final String USERNAME_LOCATION = "ConnectionUsername";
	private static final String PASSWORD_LOCATION = "ConnectionPassword";
	private static final String URL_LOCATION = "ConnectionURL";
	private static ConnectionHandler instance = new ConnectionHandler();
	final static Logger log = LogManager.getLogger(ConnectionHandler.class);

	public static ConnectionHandler getInstance() {
		return instance;
	}
	
	private static Connection connection;
	
	@Override
	public void close() throws Exception {
		if (connection != null) {
			connection.close();
		}
	}
	
	public synchronized Connection getConnection() {
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
		connectionUsername = System.getenv("ConnectionUsername");
	    connectionPassword = System.getenv("ConnectionPassword");
	    url = System.getenv("ConnectionURL");
        log.info("ConnectionHandler: URL: " + url+", USERNAME: " + connectionUsername + ", PASSWORD: " +connectionPassword);	    
		DriverManager.registerDriver (new oracle.jdbc.OracleDriver());
		return DriverManager.getConnection(url, connectionUsername, connectionPassword);
	}
	
	private ConnectionHandler() { }
}
