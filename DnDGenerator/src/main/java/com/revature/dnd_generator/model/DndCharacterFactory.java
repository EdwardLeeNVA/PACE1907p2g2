package com.revature.dnd_generator.model;

public class DndCharacterFactory {

	public static DndCharacter create(int id, int playerId, String name, String race, String dndClass, String alignment, String ... proficiencies) {
		DndCharacter character = new DndCharacter();
		character.setId(id);
		character.setPlayerId(playerId);
		character.setName(name);
		character.setRace(race);
		character.setDndClass(dndClass);
		character.setAlignment(alignment);
		character.setProficiencies(proficiencies);
		return character;
	}
	
	private DndCharacterFactory() { }
}
