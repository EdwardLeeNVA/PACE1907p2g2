package com.revature.services;

import com.revature.model.player;

public interface PlayerServices {
	public player attemptLogin(String username, String password);
	public void createPlayer(String username, String password);
}
