package com.revature.dnd_generator.data;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.exceptions.IncorrectLoginException;
import com.revature.dnd_generator.data.Dao;

public class PlayerDao extends Dao {
	
	public static final int MAX_NAME_LENGTH = 30;
	public static final int MAX_BIO_LENGTH = 1000;
	private static final Logger LOGGER = Logger.getLogger(PlayerDao.class);
	private static final String COL_USR_ID = "USER_ID";

	private static PlayerDao instance = new PlayerDao();
	
	public static PlayerDao getInstance() {
		return instance;
	}
	
	public void insertUser(String username, String password) {
		try (Connection c = getConnection()) {
			CallableStatement statement = statementMethods().insertUser(c, username, password);
			statement.execute();
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
	}
	
	public int logIn(String username, String password) throws IncorrectLoginException {
		try (Connection c = getConnection()) {
			CallableStatement statement = statementMethods().logIn(c, username, password);
			statement.execute();
			return statement.getInt(1);
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
			throw new IncorrectLoginException(e);
		}
	}
	
	private PlayerDaoStatements statementMethods() {
		return PlayerDaoStatements.getInstance();
	}
	
	private PlayerDao() { }
	
}