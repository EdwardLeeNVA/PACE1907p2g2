package com.revature.dnd_generator.services;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;

import com.revature.dnd_generator.data.CharacterDao;

public class ChartsServiceImpl implements ChartsService {
	private static final Logger LOGGER = Logger.getLogger(CharacterServicesImpl.class);

	@Override
	public Map<String, Integer> getPlayerRaceBreakdown(int playerId) {
		try {
			LOGGER.info("in service Method");

			return CharacterDao.getInstance().getOwnedRaceCount(playerId);
		}catch (Exception e) {
			LOGGER.error("getPlayerRaceBreakdown failed");
			return new HashMap<String, Integer>();
		}
	}

	@Override
	public Map<String, Integer> getPlayerClassBreakdown(int playerId) {
		try{
			LOGGER.info("in service Method");
			return CharacterDao.getInstance().getOwnedClassCount(playerId);
		}catch(Exception e) {
			LOGGER.error("getPlayerClassBreakdown failed");
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
