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
	
	PreparedStatement selectUserPassword(int userId) throws SQLException {
		String sql = "SELECT USER_PASSWORD FROM PLAYER WHERE " + PlayerDao.COL_USR_ID + " = ?";
		PreparedStatement statement = getConnection().prepareStatement(sql);
		statement.setInt(1, userId);
		return statement;
	}
	
	private PlayerDaoStatements() { }
}
