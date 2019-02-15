package com.revature.dnd_generator.services;

import com.revature.dnd_generator.model.IdUsernamePair;

public interface PlayerServices {
	public IdUsernamePair attemptLogin(String username, String password);
	public void createPlayer(String username, String password);
}
