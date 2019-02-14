package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.SQLException;

import oracle.jdbc.OracleTypes;

class CharacterDaoStatements extends Dao {
	
	private static CharacterDaoStatements instance = new CharacterDaoStatements();
	
	static CharacterDaoStatements getInstance() {
		return instance;
	}
	
	CallableStatement insertCharacter(String username, String password) throws SQLException {
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
	
	private CharacterDaoStatements() { }
}
