package com.revature.dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;

class PlayerDaoStatements extends Dao {
	
	private static PlayerDaoStatements instance = new PlayerDaoStatements();
	
	static PlayerDaoStatements getInstance() {
		return instance;
	}

	PreparedStatement selectUserId(String username) throws SQLException {
		String sql = "SELECT " + PlayerDao.COL_USR_ID + " FROM PLAYER WHERE USERNAME = ?";
		PreparedStatement statement = getConnection().prepareStatement(sql);
		statement.setString(1, username);
		return statement;
	}
	
	PreparedStatement compareUserPassword(int userId, String password) throws SQLException {
		throw new UnsupportedOperationException();
	}
	
	private PlayerDaoStatements() { }
}
