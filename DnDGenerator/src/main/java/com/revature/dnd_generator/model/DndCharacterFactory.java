package com.revature.dnd_generator.model;

public class DndCharacterFactory {

	public static DndCharacter create(int playerId, String name, String race, String dndClass, String ... proficiencies) {
		DndCharacter character = new DndCharacter();
		character.setPlayerId(playerId);
		character.setName(name);
		character.setRace(race);
		character.setDndClass(dndClass);
		character.setProficiencies(proficiencies);
		return character;
	}
	
	private DndCharacterFactory() { }
}
