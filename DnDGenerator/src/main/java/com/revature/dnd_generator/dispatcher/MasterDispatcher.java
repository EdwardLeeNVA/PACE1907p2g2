package com.revature.dnd_generator.dispatcher;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Random;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dnd_generator.data.PlayerDao;
import com.revature.dnd_generator.model.DndCharacter;
import com.revature.dnd_generator.model.Player;
import com.revature.dnd_generator.services.CharacterServices;
import com.revature.dnd_generator.services.CharacterServicesImpl;
import com.revature.dnd_generator.services.PlayerServices;
import com.revature.dnd_generator.services.PlayerServicesImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class MasterDispatcher {
	private MasterDispatcher() {}
	private static final Logger LOGGER = Logger.getLogger(MasterDispatcher.class);
	private static final CharacterServices cService = new CharacterServicesImpl();
	static ObjectMapper mapper = new ObjectMapper();

	
	public static Object process(HttpServletRequest request, HttpServletResponse response) throws IOException {
		LOGGER.info("In Dispatcher, PATH: " + request.getRequestURI());
		if(request.getRequestURI().contains("Login")){
			LOGGER.info("Starting the login portion of the dispatcher");
			new LoginDelegate().process(request,response); 
		}else if(request.getRequestURI().contains("Character")) {
			LOGGER.info("Top of CHARACTER");
			new CharacterDelegate().process(request, response);
		}else if(request.getRequestURI().contains("Register")) {
			LOGGER.info("Registering a new user");
			new RegisterDelegate().process(request, response);
		}else if(request.getRequestURI().contains("Classes")) {
			LOGGER.info("Classes Delegate Call");
			new ClassDelegate().process(request, response);
		}else if(request.getRequestURI().contains("Races")) {
			LOGGER.info("New Race");
			new RaceDelegate().process(request, response);
		}else if( request.getRequestURI().contains("Name")) {
			LOGGER.info("Getting a name");
			new NameDelegate().process(request, response);
		}else if(request.getRequestURI().contains("Save")) {
			LOGGER.info("Saving a character");
			new SaveDelegate().process(request, response);
		}else if(request.getRequestURI().contains("Chart")) {
			LOGGER.info("Getting a chart");
			new ChartsDelegate().process(request, response);
		}
		return null;
	}
}
