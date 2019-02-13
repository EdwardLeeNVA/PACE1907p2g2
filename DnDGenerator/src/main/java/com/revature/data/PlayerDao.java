package com.revature.data;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.revature.model.player;

public class PlayerDao {
	
	public static final int MAX_NAME_LENGTH = 30;
	public static final int MAX_BIO_LENGTH = 1000;
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
		}catch(SQLException e) {
			//add logger call
			e.printStackTrace();
		}
		catch(Exception e) {
			//add logger call
			e.printStackTrace();
		}
	}
	
	public player logIn(String username, String password) {
		player p = null;
		try {
		CallableStatement statement = statementMethods().logIn(username, password);
		statement.execute();
		statement.getObject(3);
		ResultSet results = (ResultSet) statement.getObject(3);
		System.out.println("Before if statement");
		if(results.next()) {
			System.out.println("In the if statement");
			p = new player(results.getString(1),results.getInt(2)); //column names don't seem to work her
		}else {
			//invalid login so need to throw a custom error or something else
		}
		}catch(SQLException e) {
			//add logger call
			e.printStackTrace();
		}
		catch(Exception e) {
			//add logger call
			//As a talking point. I can solve it. Currently when we log in and the user is not in the database
			//it returns a null RS because nothing is returned. I will explain this to Anup and show him how to fix it tomorrow
			
			e.printStackTrace();
		}
		return p;
	}
	
	private PlayerDaoStatements statementMethods() {
		return PlayerDaoStatements.getInstance();
	}
	
	private PlayerDao() { }
	
}
