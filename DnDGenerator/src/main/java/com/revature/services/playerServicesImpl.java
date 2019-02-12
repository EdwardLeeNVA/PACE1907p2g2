package com.revature.services;

import com.revature.dao.playerDAOImpl;

public class playerServicesImpl implements PlayerServices {

	@Override
	public String attemptLogin(String username, String password) {
		return playerDAOImpl.getPlayerDAO().getPlayerDAO().login(username, password);
	}

}
