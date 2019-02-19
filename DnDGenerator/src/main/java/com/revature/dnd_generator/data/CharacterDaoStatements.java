package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import oracle.jdbc.OracleTypes;

class CharacterDaoStatements {
	
	public static final String SELECT_CLASS_COUNT = "SELECT * FROM CLASS_COUNT";
	public static final String SELECT_RACE_COUNT = "SELECT * FROM RACE_COUNT";
	
	private static CharacterDaoStatements instance = new CharacterDaoStatements();
	
	static CharacterDaoStatements getInstance() {
		return instance;
	}
	
	CallableStatement insertCharacter(Connection connection, int playerId, String name, String race, String dndClass, String proficiency1, String proficiency2, String proficiency3, String proficiency4, String raceProficiency, String alignment) throws SQLException {
		CallableStatement stmt = connection.prepareCall("CALL CREATECHARACTER(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		stmt.setInt(1, playerId);
		stmt.setString(2, name);
		stmt.setString(3, race);
		stmt.setString(4, dndClass);
		stmt.setString(5, proficiency1);
		stmt.setString(6, proficiency2);
		stmt.setString(7, proficiency3);
		stmt.setString(8, proficiency4);
		stmt.setString(9, raceProficiency);
		stmt.setString(10, alignment);
		stmt.registerOutParameter(11, OracleTypes.CURSOR);
		return stmt;
	}
	
	CallableStatement selectOwnedCharacters(Connection connection, int playerId) throws SQLException {
		CallableStatement stmt = connection.prepareCall("CALL GETOWNEDCHARACTER(?, ?)");
		stmt.setInt(1, playerId);
		stmt.registerOutParameter(2, OracleTypes.CURSOR);
		return stmt;
	}
	
	CallableStatement selectCharacter(Connection connection, int id) throws SQLException {
		CallableStatement stmt = connection.prepareCall("CALL GETCHARACTER(?, ?)");
		stmt.setInt(1, id);
		stmt.registerOutParameter(2, OracleTypes.CURSOR);
		return stmt;
	}
	
	private CharacterDaoStatements() { }
}
