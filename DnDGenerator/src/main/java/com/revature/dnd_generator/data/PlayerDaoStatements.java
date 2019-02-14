package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.SQLException;

import oracle.jdbc.OracleTypes;

class PlayerDaoStatements extends Dao {
	
	private static PlayerDaoStatements instance = new PlayerDaoStatements();
	
	static PlayerDaoStatements getInstance() {
		return instance;
	}
	
	CallableStatement insertUser(String username, String password) throws SQLException {
		CallableStatement stmt = getConnection().prepareCall("CALL CREATE_USER(?, ?)");
		stmt.setString(1, username);
		stmt.setString(2, password);
		return stmt;
	}
	
	CallableStatement logIn(String username, String password) throws SQLException {
		CallableStatement stmt = getConnection().prepareCall("CALL LOGIN(?, ?, ?)");
		stmt.setString(1, username);
		stmt.setString(2, password);
		stmt.registerOutParameter(3, OracleTypes.CURSOR);
		return stmt;
	}
	
	private PlayerDaoStatements() { }
}
