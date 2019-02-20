package com.revature.dnd_generator.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
		//split based off of the 
		String[] path = req.getRequestURI().split("/");
		if(path[4].equalsIgnoreCase("GlobalClass")) {
			cServices.getGlobalClassBreakdown();
		}else if(path[4].equalsIgnoreCase("GlobalRace")) {
			cServices.getGlobalRaceBreakdown();
		}else if(path[4].equalsIgnoreCase("PlayerRace")) {
			//cServices.getPlayerRaceBreakdown(1);
		}else if(path[4].equalsIgnoreCase("PlayerClass")) {
			//cServices.getPlayerClassBreakdown(1);
		}
	}

}
