package com.revature.dnd_generator.model;

public class PlayerFactory {

	public static Player create(int id, String username, String password) {
		Player player = createNoPassword(id, username);
		player.setPassword(password);
		return player;
	}
	
	public static Player createNoPassword(int id, String username) {
		Player player = new Player();
		player.setId(id);
		player.setUsername(username);
		return player;
	}
	
	private PlayerFactory() { }
}
