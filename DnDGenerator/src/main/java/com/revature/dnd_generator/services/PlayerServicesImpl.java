package com.revature.dnd_generator.services;

import com.revature.dnd_generator.data.PlayerDao;
<<<<<<< HEAD
=======
import com.revature.dnd_generator.exceptions.IncorrectLoginException;
>>>>>>> master
import com.revature.dnd_generator.model.Player;
public class PlayerServicesImpl implements PlayerServices {

	@Override
	public Player attemptLogin(String username, String password) {
		try {
			return PlayerDao.getInstance().logIn(username, password);
		}catch(IncorrectLoginException ile ){
			return new Player(); //void player so the front end can understand there was an error
		}
	}
	
	public void createPlayer(String username, String password) {
		PlayerDao.getInstance().createUser(username, password);
	}
}