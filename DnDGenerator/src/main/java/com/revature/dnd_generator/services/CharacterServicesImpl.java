package com.revature.dnd_generator.services;

import java.util.List;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.data.CharacterDao;
import com.revature.dnd_generator.exceptions.CharacterCreationFailedException;
import com.revature.dnd_generator.model.DndCharacter;

public class CharacterServicesImpl implements CharacterServices {

	private static final Logger LOGGER = Logger.getLogger(CharacterServicesImpl.class);
	
	@Override
	public int saveDndCharacter(DndCharacter d) {
		try {
			return CharacterDao.getInstance().insertCharacter(d);
		} catch (CharacterCreationFailedException e) {
			LOGGER.error("Character creation failed.", e);
			return 0;
		}
	}

	@Override
	public DndCharacter getDndCharacter(int characterId) {
		return CharacterDao.getInstance().selectCharacter(characterId);
	}

	@Override
	public List<DndCharacter> getAllPlayerCharacters(int playerId) {
		LOGGER.info("CharacterServices: FETCHING ALL OWNED CHATACTERS");
		return CharacterDao.getInstance().selectOwnedCharacters(playerId);
	}

	@Override
	public boolean deleteCharacter(DndCharacter d) {
		try {
			CharacterDao.getInstance().deleteCharacter(d);
			return true;
		}catch(Exception e) {
			LOGGER.error("Character deleting failed", e);
			return false;			
		}
	}

}
