package com.revature.dnd_generator.model;

public class DndCharacterFactory {

	public static DndCharacter create(String name, String race, String dndClass, String bio, String jsonProficencies) {
		DndCharacter character = new DndCharacter();
		character.setName(name);
		character.setRace(race);
		character.setDndClass(dndClass);
		character.setBio(bio);
		character.setJsonProficencies(jsonProficencies);
		return character;
	}
	
	private DndCharacterFactory() { }
}
