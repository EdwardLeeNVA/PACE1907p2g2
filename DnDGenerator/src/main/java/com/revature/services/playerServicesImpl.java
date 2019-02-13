package com.revature.services;

import java.sql.SQLException;

import com.revature.dao.PlayerDao;

public class playerServicesImpl implements PlayerServices {

	@Override
	public String attemptLogin(String username, String password) {
		try {
			PlayerDao.getInstance().login(username, password);
			return username;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
