package com.revature.services;

import com.revature.model.player;

import com.revature.data.PlayerDao;
public class playerServicesImpl implements PlayerServices {

	@Override
	public player attemptLogin(String username, String password) {
			return PlayerDao.getInstance().logIn(username, password);
	}
	public void createPlayer(String username, String password) {
		PlayerDao.getInstance().createUser(username, password);
	}
}
