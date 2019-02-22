package com.revature.dnd_generator.utilities;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class ConnectionHandler {
	
	private static ConnectionHandler instance = null;

	public static ConnectionHandler getInstance() {
		if (instance == null) {
			instance = new ConnectionHandler();
		}
		return instance;
	}
	
	private DataSource dataSource = null;
	
	public Connection getConnection() {
		try {
			DataSource ds = getDataSource();
			return ds.getConnection();
		} catch(NamingException | SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	private DataSource getDataSource() throws NamingException {
		if (dataSource == null) {
			Context initContext = new InitialContext();
			Context envContext  = (Context)initContext.lookup("java:/comp/env");
			dataSource = (DataSource) envContext.lookup("jdbc/myoracle");
		}
		return dataSource;
	}
	
	private ConnectionHandler() { }
}
