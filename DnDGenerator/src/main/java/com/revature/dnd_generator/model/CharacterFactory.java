package com.revature.dnd_generator.model;

public class CharacterFactory {

	public static Character create(String name, String race, String dndClass, String bio, String jsonProficencies) {
		Character character = new Character();
		character.setName(name);
		character.setRace(race);
		character.setDndClass(dndClass);
		character.setBio(bio);
		character.setJsonProficencies(jsonProficencies);
		return character;
	}
	
	private CharacterFactory() { }
}
