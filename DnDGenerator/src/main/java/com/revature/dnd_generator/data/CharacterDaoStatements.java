package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.SQLException;

import oracle.jdbc.OracleTypes;

class CharacterDaoStatements extends Dao {
	
	private static CharacterDaoStatements instance = new CharacterDaoStatements();
	
	static CharacterDaoStatements getInstance() {
		return instance;
	}
	
	CallableStatement insertCharacter(String name, String race, String dndClass, String proficiency1, String proficiency2, String proficiency3, String proficiency4, String raceProficiency) throws SQLException {
		CallableStatement stmt = getConnection().prepareCall("CALL CREATECHARACTER(?, ?, ?, ?, ?, ?, ?, ?, ?)");
		stmt.setString(1, name);
		stmt.setString(2, race);
		stmt.setString(3, dndClass);
		stmt.setString(4, proficiency1);
		stmt.setString(5, proficiency2);
		stmt.setString(6, proficiency3);
		stmt.setString(7, proficiency4);
		stmt.setString(8, raceProficiency);
		stmt.registerOutParameter(9, OracleTypes.CURSOR);
		return stmt;
	}
	
	CallableStatement selectOwnedCharacter(int id) throws SQLException {
		CallableStatement stmt = getConnection().prepareCall("CALL GETOWNEDCHARACTER(?, ?)");
		stmt.setInt(1, id);
		stmt.registerOutParameter(2, OracleTypes.CURSOR);
		return stmt;
	}
	
	CallableStatement selectCharacter(int id) throws SQLException {
		CallableStatement stmt = getConnection().prepareCall("CALL GETCHARACTER(?, ?)");
		stmt.setInt(1, id);
		stmt.registerOutParameter(2, OracleTypes.CURSOR);
		return stmt;
	}
	
	private CharacterDaoStatements() { }
}
