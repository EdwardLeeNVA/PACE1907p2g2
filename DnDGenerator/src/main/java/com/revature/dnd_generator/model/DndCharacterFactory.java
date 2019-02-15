package com.revature.dnd_generator.model;

public class DndCharacterFactory {

	public static DndCharacter create(int playerId, String name, String race, String dndClass, String prof1, String prof2, String prof3, String prof4) {
		DndCharacter character = new DndCharacter();
		character.setPlayerId(playerId);
		character.setName(name);
		character.setRace(race);
		character.setDndClass(dndClass);
		character.setProf1(prof1);
		character.setProf2(prof2);
		character.setProf3(prof3);
		character.setProf4(prof4);
		return character;
	}
	
	private DndCharacterFactory() { }
}
