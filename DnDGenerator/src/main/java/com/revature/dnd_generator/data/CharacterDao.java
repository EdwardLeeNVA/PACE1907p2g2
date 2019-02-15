package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.model.DndCharacter;
import com.revature.dnd_generator.model.DndCharacterFactory;

public class CharacterDao {

	private static final Logger LOGGER = Logger.getLogger(CharacterDao.class);
	private static final String COL_CHAR_ID = "ID";
	private static final String COL_PLR_ID = "PLAYER_ID";
	private static final String COL_CHAR_NAME = "NAME";
	private static final String COL_CHAR_RACE = "RACE";
	private static final String COL_CHAR_CLASS = "CLASS";
	private static final String COL_CHAR_PROF = "PROFICIENCIES";
	private static final String COL_CHAR_PROF1 = "PROF_1";
	private static final String COL_CHAR_PROF2 = "PROF_2";
	private static final String COL_CHAR_PROF3 = "PROF_3";
	private static final String COL_CHAR_PROF4 = "PROF_4";
	private static final String COL_CHAR_BIO = "BIO";

	public void insertCharacter(String name, String race, String dndClass, String proficiency1, String proficiency2,
			String proficiency3, String proficiency4, String raceProficiency) {
		try {
			CallableStatement statement = statementMethods().insertCharacter(name, race, dndClass, proficiency1,
					proficiency2, proficiency3, proficiency4, raceProficiency);
			statement.execute();
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
	}
	
	public DndCharacter selectOwnedCharacter(int id) {
		try {
			CallableStatement statement = statementMethods().selectOwnedCharacter(id);
			statement.execute();
			return selectCharacterCommon(statement);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}
	
	public DndCharacter selectCharacter(int id) {
		try {
			CallableStatement statement = statementMethods().selectCharacter(id);
			statement.execute();
			return selectCharacterCommon(statement);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}
	
	private DndCharacter selectCharacterCommon(CallableStatement statement) throws SQLException {
		ResultSet results = (ResultSet) statement.getObject(2);
		if (!results.next()) {
			return null;
		}
		int playerId = results.getInt(COL_PLR_ID);
		String name = results.getString(COL_CHAR_NAME);
		String race = results.getString(COL_CHAR_RACE);
		String characterClass = results.getString(COL_CHAR_CLASS);
		String prof1 = results.getString(COL_CHAR_PROF1);
		String prof2 = results.getString(COL_CHAR_PROF2);
		String prof3 = results.getString(COL_CHAR_PROF3);
		String prof4 = results.getString(COL_CHAR_PROF4);
		String biography = results.getString(COL_CHAR_BIO);
		return DndCharacterFactory.create(playerId, name, race, characterClass, prof1, prof2, prof3, prof4);
	}

	private CharacterDaoStatements statementMethods() {
		return CharacterDaoStatements.getInstance();
	}

	private CharacterDao() {
	}
}
