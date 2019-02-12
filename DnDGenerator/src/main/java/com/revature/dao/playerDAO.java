package com.revature.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PlayerDao {
	
	public static final int MAX_NAME_LENGTH = 30;
	public static final int MAX_BIO_LENGTH = 1000;
	static final String COL_USR_ID = "USER_ID";

	private static PlayerDao instance = new PlayerDao();
	
	public static PlayerDao getInstance() {
		return instance;
	}
	
	public int login(String username, String password) throws SQLException {
		PreparedStatement statement = PlayerDaoStatements.getInstance().selectUserId(username, password);
		ResultSet results = statement.executeQuery();
		results.next();
		return results.getInt(COL_USR_ID);
	}
	
	private PlayerDao() { }
	
}
