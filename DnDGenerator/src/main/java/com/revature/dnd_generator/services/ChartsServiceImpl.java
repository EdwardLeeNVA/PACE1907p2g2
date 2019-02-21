package com.revature.dnd_generator.services;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.revature.dnd_generator.data.CharacterDao;

public class ChartsServiceImpl implements ChartsService {

	@Override
	public Map<String, Integer> getPlayerRaceBreakdown(int playerId) {
		try {
			return CharacterDao.getInstance().getOwnedRaceCount(playerId);
		}catch (Exception e) {
			return new HashMap<String, Integer>();
		}
	}

	@Override
	public Map<String, Integer> getPlayerClassBreakdown(int playerId) {
		try{
			return CharacterDao.getInstance().getOwnedClassCount(playerId);
		}catch(Exception e) {
			return new HashMap<String, Integer>();
		}
	}

	@Override
	public Map<String, Integer> getGlobalRaceBreakdown() {
		return CharacterDao.getInstance().selectRaceCount();
	}

	@Override
	public Map<String, Integer> getGlobalClassBreakdown() {
		return CharacterDao.getInstance().selectClassCount();
	}

}
