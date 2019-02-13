package com.revature.data;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PlayerDao {
	
	public static final int MAX_NAME_LENGTH = 30;
	public static final int MAX_BIO_LENGTH = 1000;
	//private static final String COL_USR_ID = "USER_ID";
	private static final String COL_USRNM = "USERNAME";

	private static PlayerDao instance = new PlayerDao();
	
	public static PlayerDao getInstance() {
		return instance;
	}
	
	public void createUser(String username, String password) throws SQLException {
		CallableStatement statement = statementMethods().createUser(username, password);
		statement.execute();
	}
	
	public int login(String username, String password) throws SQLException {
		CallableStatement statement = statementMethods().logIn(username, password);
		statement.execute();
		ResultSet results = (ResultSet) statement.getObject(1);
		results.next();
		return results.getInt(COL_USRNM);
	}
	
	private PlayerDaoStatements statementMethods() {
		return PlayerDaoStatements.getInstance();
	}
	
	private PlayerDao() { }
	
}
