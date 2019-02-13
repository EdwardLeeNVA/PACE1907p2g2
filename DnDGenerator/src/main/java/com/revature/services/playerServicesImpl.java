package com.revature.services;

import com.revature.model.player;

import com.revature.data.PlayerDao;
public class playerServicesImpl implements PlayerServices {

	@Override
	public player attemptLogin(String username, String password) {
		int userId = PlayerDao.getInstance().logIn(username, password);
		return new player(username, userId);
	}
	public void createPlayer(String username, String password) {
		PlayerDao.getInstance().createUser(username, password);
	}
}