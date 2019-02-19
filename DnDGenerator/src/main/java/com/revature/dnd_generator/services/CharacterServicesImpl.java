package com.revature.dnd_generator.services;

import java.util.List;

import com.revature.dnd_generator.data.CharacterDao;
import com.revature.dnd_generator.model.DndCharacter;

public class CharacterServicesImpl implements CharacterServices {

	@Override
	public void saveDndCharacter(DndCharacter d) {
		CharacterDao.getInstance().insertCharacter(d);
	}

	@Override
	public DndCharacter getDndCharacter(int characterId) {
		return CharacterDao.getInstance().selectCharacter(characterId);
	}

	@Override
	public List<DndCharacter> getAllPlayerCharacters(int playerId) {
		return CharacterDao.getInstance().selectOwnedCharacter(playerId);
	}

}
