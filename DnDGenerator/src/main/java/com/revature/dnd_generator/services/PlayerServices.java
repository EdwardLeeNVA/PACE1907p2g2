package com.revature.dnd_generator.services;

import com.revature.dnd_generator.model.Player;

public interface PlayerServices {
	public Player attemptLogin(String username, String password);
	public boolean createPlayer(String username, String password);
}
