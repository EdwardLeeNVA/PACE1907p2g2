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
	private static final String COL_CHAR_NAME = "CHARACTER_NAME";
	private static final String COL_CHAR_RACE = "RACE";
	private static final String COL_CHAR_CLASS = "CLASS";
	private static final String COL_CHAR_PROF = "PROFICIENCIES";
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
	
	public void selectOwnedCharacter(int id) {
		
	}
	
	private DndCharacter selectCharacterCommon(CallableStatement statement) {
		try {
			ResultSet results = (ResultSet) statement.getObject(2);
			if (!results.next()) {
				return null;
			}
			int id = results.getInt(COL_CHAR_ID);
			String name = results.getString(COL_CHAR_NAME);
			String race = results.getString(COL_CHAR_RACE);
			String characterClass = results.getString(COL_CHAR_CLASS);
			String proficiencies = results.getString(COL_CHAR_PROF);
			String biography = results.getString(COL_CHAR_BIO);
			return DndCharacterFactory.create(name, race, characterClass, biography, proficiencies);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			return null;
		}
	}

	private CharacterDaoStatements statementMethods() {
		return CharacterDaoStatements.getInstance();
	}

	private CharacterDao() {
	}
}
