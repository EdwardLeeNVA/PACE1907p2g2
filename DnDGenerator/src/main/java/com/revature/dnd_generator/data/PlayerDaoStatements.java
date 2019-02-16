package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;

import oracle.jdbc.OracleTypes;

class PlayerDaoStatements {
	
	private static PlayerDaoStatements instance = new PlayerDaoStatements();
	
	static PlayerDaoStatements getInstance() {
		return instance;
	}
	
	CallableStatement insertUser(Connection connection, String username, String password) throws SQLException {
		CallableStatement stmt = connection.prepareCall("CALL CREATE_USER(?, ?)");
		stmt.setString(1, username);
		stmt.setString(2, password);
		return stmt;
	}
	
	CallableStatement logIn(Connection connection, String username, String password) throws SQLException {
		CallableStatement stmt = connection.prepareCall("BEGIN; ? := LOGIN_FUNC(?,?); END;"); //error with the SQL Statement is thrown here.
		stmt.registerOutParameter(1, OracleTypes.NUMBER);
		stmt.setString(2, username);
		stmt.setString(3, password);
		return stmt;
	}
	
	private PlayerDaoStatements() { }
}
