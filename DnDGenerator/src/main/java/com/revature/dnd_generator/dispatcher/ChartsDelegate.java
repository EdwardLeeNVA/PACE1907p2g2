package com.revature.dnd_generator.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dnd_generator.model.Player;
import com.revature.dnd_generator.services.CharacterServices;
import com.revature.dnd_generator.services.CharacterServicesImpl;
import com.revature.dnd_generator.services.ChartsService;
import com.revature.dnd_generator.services.ChartsServiceImpl;

public class ChartsDelegate implements BaseDelegate{
	ObjectMapper mapper = new ObjectMapper();
	ChartsService cServices = new ChartsServiceImpl();
	private static final Logger LOGGER = Logger.getLogger(LoginDelegate.class);
	ChartsDelegate(){}
	@Override
	public void process(HttpServletRequest req, HttpServletResponse res) throws JsonProcessingException, IOException {
		LOGGER.info("ChartsDelegate: Top of Charts Delegate");
		LOGGER.info(req.getRequestURI());
		res.setContentType("application/json");

		//split based off of the 
		String[] path = req.getRequestURI().split("/");
		if(path[4].equalsIgnoreCase("GlobalClass")) {
			LOGGER.info("getting GlobalClass");
			String jsonString = mapper.writeValueAsString(cServices.getGlobalClassBreakdown());
			LOGGER.info("GlobalClassData: "+ jsonString);
			res.getWriter().write(jsonString);
		}else if(path[4].equalsIgnoreCase("GlobalRace")) {
			LOGGER.info("getting GlobalRace");
			String jsonString = mapper.writeValueAsString(cServices.getGlobalRaceBreakdown());
			LOGGER.info("GlobalRaceData: "+jsonString);
			res.getWriter().write(jsonString);
		}else if(path[4].equalsIgnoreCase("PlayerRace")) {
            Player input = mapper.readValue(req.getReader(), Player.class);
			String jsonString = mapper.writeValueAsString(cServices.getPlayerRaceBreakdown(input.getId()));
			LOGGER.info("PlayerRaceData: " + jsonString);
			res.getWriter().write(jsonString);
		}else if(path[4].equalsIgnoreCase("PlayerClass")) {
			Player input = mapper.readValue(req.getReader(), Player.class);
			String jsonString = mapper.writeValueAsString(cServices.getPlayerClassBreakdown(input.getId()));
			LOGGER.info("PlayerClassData: " + jsonString);
			res.getWriter().write(jsonString);
		}
	}

}
