package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.exceptions.CharacterCreationFailedException;
import com.revature.dnd_generator.exceptions.CharacterDeletionFailedException;
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
	private static final String COL_CHAR_ALN = "ALIGNMENT";
	private static final String COL_CHAR_PROF1 = "PROF_1";
	private static final String COL_CHAR_PROF2 = "PROF_2";
	private static final String COL_CHAR_PROF3 = "PROF_3";
	private static final String COL_CHAR_PROF4 = "PROF_4";
	private static final String COL_CHAR_PROF_R = "RPROF";
	private static final String COL_CHAR_BIO = "BIO";
	private static final String COL_CLASS_COUNT = "CLASS_COUNT";
	private static final String COL_RACE_COUNT = "RACE_COUNT";
	private static final String COL_PLAYER_CLASS_COUNT = "COUNT(CLASS)";
	private static final String COL_PLAYER_CLASS = "CLASS";	
	private static final String COL_PLAYER_RACE_COUNT = "COUNT(RACE)";
	private static final String COL_PLAYER_RACE = "RACE";
	
	public int insertCharacter(DndCharacter character) throws CharacterCreationFailedException {
		try (Connection con = getConnection()) {
			int playerId = character.getPlayerId();
			String name = character.getName();
			String race = character.getRace();
			String dndClass = character.getDndClass();
			String alignment = character.getAlignment();
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
				prof2 = null;
			}
			String prof3;
			if (numProfs >= 3) {
				prof3 = profList[2];
			} else {
				prof3 = null;
			}
			String prof4;
			if (numProfs >= 4) {
				prof4 = profList[3];
			} else {
				prof4 = null;
			}
			CallableStatement statement = statementMethods().insertCharacter(con, playerId, name, race, dndClass, prof1,
					prof2, prof3, prof4, alignment);
			statement.execute();
			int id;
			try (ResultSet results = (ResultSet) statement.getObject(10)) {
				results.next();
				id = results.getInt(COL_CHAR_ID);
			}
			con.close();
			return id;
		} catch (SQLException e) {
			throw new CharacterCreationFailedException(e);
		}
	}

	public List<DndCharacter> selectOwnedCharacters(int playerId) {
		try (Connection con = getConnection()) {
			CallableStatement statement = statementMethods().selectOwnedCharacters(con, playerId);
			statement.execute();
			List<DndCharacter> characters;
			try (ResultSet results = (ResultSet) statement.getObject(2)) {
				characters = createCharactersFromResultSet(results);
			}
			con.close();
			return characters;
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return new ArrayList<>();
	}

	public DndCharacter selectCharacter(int id) {
		try (Connection c = getConnection()) {
			CallableStatement statement = statementMethods().selectCharacter(c, id);
			statement.execute();
			DndCharacter character;
			try (ResultSet results = (ResultSet) statement.getObject(2)) {
				if (!results.next()) {
					return null;
				}
				character = createCharacterFromResult(results);
			}
			c.close();
			return character;
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
	
	public void deleteCharacter(DndCharacter character) throws CharacterDeletionFailedException {
		try (Connection con = getConnection()) {
			int id = character.getId();
			String name = character.getName();
			PreparedStatement stmt = statementMethods().deleteCharacter(con, id, name);
			stmt.execute();
			con.close();
		} catch (SQLException e) {
			throw new CharacterDeletionFailedException(e);
		}
	}
	
	public Map<String, Integer> getOwnedClassCount(int playerId) {
		LOGGER.info("Top of getOwnedClassCount");
		try (Connection con = getConnection()) {
			CallableStatement stmt = statementMethods().getOwnedClassCount(con, playerId);
			return getOwnedCountCommon(stmt, COL_PLAYER_CLASS, COL_PLAYER_CLASS_COUNT);
		} catch (SQLException e) {
			LOGGER.error("Could not get view.", e);
		}
		return new HashMap<String, Integer>(0);
	}
	
	public Map<String, Integer> getOwnedRaceCount(int playerId) throws SQLException {
		try (Connection con = getConnection()) {
			LOGGER.info("Top of getOwnedRaceCount");
			CallableStatement stmt = statementMethods().getOwnedRaceCount(con, playerId);
			return getOwnedCountCommon(stmt, COL_PLAYER_RACE, COL_PLAYER_RACE_COUNT);
		} catch (SQLException e) {
			LOGGER.error("Could not get view.", e);
		}
		return new HashMap<String, Integer>(0);
	}
	
	private List<DndCharacter> createCharactersFromResultSet(ResultSet results) throws SQLException {
		ArrayList<DndCharacter> characters = new ArrayList<>();
		while (results.next()) {
			DndCharacter newCharacter = createCharacterFromResult(results);
			characters.add(newCharacter);
		}
		return characters;
	}

	private DndCharacter createCharacterFromResult(ResultSet result) throws SQLException {
		int id = result.getInt(COL_CHAR_ID);
		int playerId = result.getInt(COL_PLR_ID);
		String name = result.getString(COL_CHAR_NAME);
		String race = result.getString(COL_CHAR_RACE);
		String characterClass = result.getString(COL_CHAR_CLASS);
		String alignment = result.getString(COL_CHAR_ALN);
		String prof1 = result.getString(COL_CHAR_PROF1);
		String prof2 = result.getString(COL_CHAR_PROF2);
		String prof3 = result.getString(COL_CHAR_PROF3);
		String prof4 = result.getString(COL_CHAR_PROF4);
		return DndCharacterFactory.create(id, playerId, name, race, characterClass, alignment, prof1, prof2, prof3, prof4);
	}
	
	private Map<String, Integer> resultSetToCountMap(String keyColumn, String valueColumn, ResultSet results) throws SQLException {
		HashMap<String, Integer> countMap = new HashMap<>();
		while (results.next()) {
			String key = results.getString(keyColumn);
			Integer value = results.getInt(valueColumn);
			countMap.put(key, value);
		}
		return countMap;
	}
	
	private Map<String, Integer> selectCountCommon(String query, String keyColumn, String valueColumn) {
		Map<String, Integer> countMap = null;
		try (Connection c = getConnection()) {
			Statement statement = c.createStatement();
			try (ResultSet results = statement.executeQuery(query)) {
				countMap = resultSetToCountMap(keyColumn, valueColumn, results);
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			countMap = new HashMap<String, Integer>(0);
		}
		return countMap;
	}
	
	public Map<String, Integer> getOwnedCountCommon(CallableStatement statement, String keyColumn, String valueColumn) throws SQLException {
		LOGGER.info("TOP of getOwnedCountCommon");
		statement.execute();
		try (ResultSet results = (ResultSet) statement.getObject(1)) {
			ResultSetMetaData rsmd = results.getMetaData();
			keyColumn = rsmd.getColumnLabel(1);
			valueColumn = rsmd.getColumnLabel(2);
			LOGGER.info("keyColumn: " + keyColumn + "\nvalueColumn: " + valueColumn);
			return resultSetToCountMap(keyColumn, valueColumn, results);
		}
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
