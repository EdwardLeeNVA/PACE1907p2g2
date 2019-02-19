package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.model.DndCharacter;
import com.revature.dnd_generator.model.DndCharacterFactory;

public class CharacterDao extends Dao {

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
	private static final String COL_CLASS_COUNT = "CLASS_COUNT";
	private static final String COL_RACE_COUNT = "RACE_COUNT";

	public void insertCharacter(DndCharacter character) {
		try (Connection con = getConnection()) {
			int playerId = character.getPlayerId();
			String name = character.getName();
			String race = character.getRace();
			String dndClass = character.getDndClass();
			String[] profList = character.getProficiencies();
			int numProfs = profList.length;
			String prof1;
			if (numProfs >= 1) {
				prof1 = profList[0];
			} else {
				prof1 = null;
			}
			String prof2;
			if (numProfs >= 2) {
				prof2 = profList[1];
			} else {
				prof2 = profList[1];
			}
			String prof3;
			if (numProfs >= 3) {
				prof3 = profList[2];
			} else {
				prof3 = profList[2];
			}
			String prof4;
			if (numProfs >= 4) {
				prof4 = profList[3];
			} else {
				prof4 = profList[3];
			}
			CallableStatement statement = statementMethods().insertCharacter(con, playerId, name, race, dndClass, prof1,
					prof2, prof3, prof4);
			statement.execute();
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
	}

	public DndCharacter selectOwnedCharacter(int id) {
		try (Connection c = getConnection()) {
			CallableStatement statement = statementMethods().selectOwnedCharacter(c, id);
			statement.execute();
			return selectCharacterCommon(statement);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}

	public DndCharacter selectCharacter(int id) {
		try (Connection c = getConnection()) {
			CallableStatement statement = statementMethods().selectCharacter(c, id);
			statement.execute();
			return selectCharacterCommon(statement);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}
	
	public Map<String, Integer> selectClassCount() {
		return selectCountCommon(CharacterDaoStatements.SELECT_CLASS_COUNT, COL_CHAR_CLASS, COL_CLASS_COUNT);
	}
	
	public Map<String, Integer> selectRaceCount() {
		return selectCountCommon(CharacterDaoStatements.SELECT_RACE_COUNT, COL_CHAR_RACE, COL_RACE_COUNT);
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
		return DndCharacterFactory.create(playerId, name, race, characterClass, prof1, prof2, prof3, prof4);
	}
	
	private Map<String, Integer> selectCountCommon(String query, String keyColumn, String valueColumn) {
		HashMap<String, Integer> countMap = new HashMap<>();
		try (Connection c = getConnection()) {
			Statement statement = c.createStatement();
			ResultSet results = statement.executeQuery(query);
			while (results.next()) {
				String key = results.getString(keyColumn);
				Integer value = results.getInt(valueColumn);
				countMap.put(key, value);
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return countMap;
	}

	private CharacterDaoStatements statementMethods() {
		return CharacterDaoStatements.getInstance();
	}

	private static CharacterDao instance = new CharacterDao();
	
	public static CharacterDao getInstance() {
		return instance;
	}
	private CharacterDao() {
	}
}
