package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.SQLException;

import oracle.jdbc.OracleTypes;

class CharacterDaoStatements extends Dao {
	
	private static CharacterDaoStatements instance = new CharacterDaoStatements();
	
	static CharacterDaoStatements getInstance() {
		return instance;
	}
	
	CallableStatement insertCharacter(int id, String name, String race, String dndClass, String proficiency1, String proficiency2, String proficiency3, String proficiency4, String raceProficiency) throws SQLException {
		CallableStatement stmt = getConnection().prepareCall("CALL CREATECHARACTER(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		stmt.setInt(1, id);
		stmt.setString(2, name);
		stmt.setString(3, race);
		stmt.setString(4, dndClass);
		stmt.setString(5, proficiency1);
		stmt.setString(6, proficiency2);
		stmt.setString(7, proficiency3);
		stmt.setString(8, proficiency4);
		stmt.setString(9, raceProficiency);
		stmt.registerOutParameter(10, OracleTypes.CURSOR);
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
