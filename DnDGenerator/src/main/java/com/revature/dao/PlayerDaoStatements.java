package com.revature.dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;

class PlayerDaoStatements extends Dao {
	
	private static PlayerDaoStatements instance = new PlayerDaoStatements();
	
	static PlayerDaoStatements getInstance() {
		return instance;
	}

	PreparedStatement insertUser(String username, String password) throws SQLException {
		String sql = "SELECT " + PlayerDao.COL_USR_ID + " FROM PLAYER WHERE USERNAME = ? AND USER_PASSWORD = ?";
		PreparedStatement statement = getConnection().prepareStatement(sql);
		statement.setString(1, username);
		statement.setString(2, password);
		return statement;
	}
	
	private PlayerDaoStatements() { }
}
