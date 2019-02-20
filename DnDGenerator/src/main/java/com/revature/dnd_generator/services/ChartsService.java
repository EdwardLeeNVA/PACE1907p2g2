package com.revature.dnd_generator.services;

import java.util.Map;

public interface ChartsService {
	Map<String, Integer> getPlayerRaceBreakdown(int playerId);
	Map<String, Integer>  getPlayerClassBreakdown(int playerId);
	Map<String, Integer>  getGlobalRaceBreakdown();
	Map<String, Integer>  getGlobalClassBreakdown();
}
