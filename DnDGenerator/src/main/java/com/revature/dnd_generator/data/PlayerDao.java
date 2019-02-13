package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.exceptions.IncorrectLoginException;
import com.revature.dnd_generator.model.Player;

public class PlayerDao {
	
	public static final int MAX_NAME_LENGTH = 30;
	public static final int MAX_BIO_LENGTH = 1000;
	private static final Logger LOGGER = Logger.getLogger(PlayerDao.class);
	private static final String COL_USR_ID = "USER_ID";
	private static final String COL_USRNM = "USERNAME";

	private static PlayerDao instance = new PlayerDao();
	
	public static PlayerDao getInstance() {
		return instance;
	}
	
	public void createUser(String username, String password) {
		try {
			CallableStatement statement = statementMethods().createUser(username, password);
			statement.execute();
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
	}
	
	public Player logIn(String username, String password) throws IncorrectLoginException {
		Player p = null;
		try {
			CallableStatement statement = statementMethods().logIn(username, password);
			statement.execute();
			ResultSet results = (ResultSet) statement.getObject(3);
			if(results.next()) {
				p =new Player( results.getString(COL_USRNM), results.getInt(COL_USR_ID));
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		if(p == null) {
			throw new IncorrectLoginException();
		}
			return p;
	}
	
	private PlayerDaoStatements statementMethods() {
		return PlayerDaoStatements.getInstance();
	}
	
	private PlayerDao() { }
	
}
