package com.revature.dnd_generator.services;

import com.revature.dnd_generator.model.player;

public interface PlayerServices {
	public player attemptLogin(String username, String password);
	public void createPlayer(String username, String password);
}
