package com.revature.dnd_generator.services;

import com.revature.dnd_generator.data.PlayerDao;
import com.revature.dnd_generator.model.player;
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