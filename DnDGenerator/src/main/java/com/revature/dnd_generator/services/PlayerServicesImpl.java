package com.revature.dnd_generator.services;

import com.revature.dnd_generator.data.PlayerDao;
import com.revature.dnd_generator.model.Player;
public class PlayerServicesImpl implements PlayerServices {

	@Override
	public Player attemptLogin(String username, String password) {
		int userId = PlayerDao.getInstance().logIn(username, password);
		return new Player(username, userId);
	}
	public void createPlayer(String username, String password) {
		PlayerDao.getInstance().createUser(username, password);
	}
}