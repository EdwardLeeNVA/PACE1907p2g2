package com.revature.dnd_generator.model;

import java.util.ArrayList;

public class DndCharacterFactory {

	public static DndCharacter create(int playerId, String name, String race, String dndClass, String ... proficiencies) {
		DndCharacter character = new DndCharacter();
		character.setPlayerId(playerId);
		character.setName(name);
		character.setRace(race);
		character.setDndClass(dndClass);
		ArrayList<String> proficiencyList = new ArrayList<>(DndCharacter.MAX_NUM_PROFS);
		for (String prof : proficiencies) {
			proficiencyList.add(prof);
		}
		character.setProficiencies(proficiencyList);
		return character;
	}
	
	private DndCharacterFactory() { }
}
