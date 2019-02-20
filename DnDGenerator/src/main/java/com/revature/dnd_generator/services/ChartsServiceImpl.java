package com.revature.dnd_generator.services;

import java.util.Map;

import com.revature.dnd_generator.data.CharacterDao;

public class ChartsServiceImpl implements ChartsService {

	@Override
	public Map<String, Integer> getPlayerRaceBreakdown(int playerId) {
		return null;
	}

	@Override
	public Map<String, Integer> getPlayerClassBreakdown(int playerId) {
		return null;
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
