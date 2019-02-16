package com.revature.dnd_generator.services;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.revature.dnd_generator.data.PlayerDao;
import com.revature.dnd_generator.exceptions.IncorrectLoginException;
import com.revature.dnd_generator.model.IdUsernamePair;
import com.revature.dnd_generator.model.Player;
import com.revature.dnd_generator.model.PlayerFactory;
public class PlayerServicesImpl implements PlayerServices {

	private static final Logger LOGGER = LogManager.getLogger(PlayerServicesImpl.class);
	
	@Override
	public IdUsernamePair attemptLogin(String username, String password) {
		try {
			int userId = PlayerDao.getInstance().logIn(username, password);
			LOGGER.info("PlayerServicesImpl userid= " + userId);
			return PlayerFactory.createIdUsernamePair(userId, username);
		} catch(IncorrectLoginException e ){
			LOGGER.error("Invalid username and password using null player");
			LOGGER.error(e.getMessage(), e);
			return new IdUsernamePair();
		}
	}
	
	public void createPlayer(String username, String password) {
		PlayerDao.getInstance().insertUser(username, password);
	}
}