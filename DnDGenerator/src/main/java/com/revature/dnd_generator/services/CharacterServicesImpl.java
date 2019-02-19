package com.revature.dnd_generator.services;

import java.util.List;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.data.CharacterDao;
import com.revature.dnd_generator.exceptions.CharacterCreationFailedException;
import com.revature.dnd_generator.model.DndCharacter;

public class CharacterServicesImpl implements CharacterServices {

	private static final Logger LOGGER = Logger.getLogger(CharacterServicesImpl.class);
	
	@Override
	public boolean saveDndCharacter(DndCharacter d) {
		try {
			CharacterDao.getInstance().insertCharacter(d);
			return true;
		} catch (CharacterCreationFailedException e) {
			LOGGER.error("Character creation failed.", e);
		}
		return false;
	}

	@Override
	public DndCharacter getDndCharacter(int characterId) {
		return CharacterDao.getInstance().selectCharacter(characterId);
	}

	@Override
	public List<DndCharacter> getAllPlayerCharacters(int playerId) {
		return CharacterDao.getInstance().selectOwnedCharacters(playerId);
	}

}
