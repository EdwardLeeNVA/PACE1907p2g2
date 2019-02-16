package com.revature.dnd_generator.model;

public class PlayerFactory {

	public static Player createUser(String username, String password) {
		Player player = new Player();
		player.setUsername(username);
		player.setPassword(password);
		return player;
	}
	
	public static IdUsernamePair createIdUsernamePair(int id, String username) {
		IdUsernamePair pair = new IdUsernamePair();
		pair.setId(id);
		pair.setUsername(username);
		return pair;
	}
	
	private PlayerFactory() { }
}
