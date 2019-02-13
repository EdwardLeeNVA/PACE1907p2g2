package com.revature.dnd_generator.services;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.revature.dnd_generator.data.PlayerDao;
import com.revature.dnd_generator.exceptions.IncorrectLoginException;
import com.revature.dnd_generator.model.Player;
public class PlayerServicesImpl implements PlayerServices {

	private static final Logger LOGGER = LogManager.getLogger(PlayerServicesImpl.class);
	
	@Override
	public Player attemptLogin(String username, String password) {
		try {
			int userId = PlayerDao.getInstance().logIn(username, password);
			return new Player(username, userId);
		} catch(IncorrectLoginException e ){
			LOGGER.error(e.getMessage(), e);
			return new Player();
		}
	}
	
	public void createPlayer(String username, String password) {
		PlayerDao.getInstance().createUser(username, password);
	}
}