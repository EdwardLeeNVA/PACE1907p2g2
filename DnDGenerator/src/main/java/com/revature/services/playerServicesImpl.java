package com.revature.services;

import java.sql.SQLException;

import com.revature.data.PlayerDao;

public class playerServicesImpl implements PlayerServices {

	@Override
	public String attemptLogin(String username, String password) {
		try {
			PlayerDao.getInstance().logIn(username, password);
			return username;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
