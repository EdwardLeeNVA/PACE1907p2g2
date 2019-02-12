package com.revature.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

public class playerDAOImpl implements playerDAO {

	private static playerDAOImpl playerDAO = null;
	private playerDAOImpl() {}
	public static playerDAOImpl getPlayerDAO() {
		if (playerDAO == null) {
			playerDAO = new playerDAOImpl();
		}
		return playerDAO;
	}
	
	
	//---------------------------------------------------------------
	public String login(String username, String password) {
		try(Connection conn = ConnectionHandler.getConnection()){
			String sql = "SELECT * FROM PLAYER WHERE USERNAME = ? AND USER_PASSWORD = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, username);
			ps.setString(2, password);
			ResultSet rs = ps.executeQuery();
			rs.next();
			System.out.println(rs.getString("USERNAME"));
			return rs.getString("USERNAME");
		}catch(Exception e) {
			return e.getMessage();
		}
	}

}
