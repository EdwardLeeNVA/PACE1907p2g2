package com.revature.services;

import com.revature.dao.PlayerDao;

public class playerServicesImpl implements PlayerServices {

	@Override
	public String attemptLogin(String username, String password) {
		return PlayerDao.getPlayerDAO().getPlayerDAO().login(username, password);
	}

}
