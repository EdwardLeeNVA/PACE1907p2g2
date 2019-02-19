package com.revature.dnd_generator.services;

import java.util.List;

import com.revature.dnd_generator.model.DndCharacter;

public interface CharacterServices {
	public boolean saveDndCharacter(DndCharacter d);
	public DndCharacter getDndCharacter(int characterId);
	public List<DndCharacter> getAllPlayerCharacters(int playerId);
	public boolean deleteCharacter(DndCharacter d);
}
