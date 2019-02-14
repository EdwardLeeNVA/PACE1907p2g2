package com.revature.dnd_generator.dispatcher;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dnd_generator.data.PlayerDao;
import com.revature.dnd_generator.model.Player;
import com.revature.dnd_generator.services.PlayerServices;
import com.revature.dnd_generator.services.PlayerServicesImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class MasterDispatcher {
	private MasterDispatcher() {}
	private static final Logger LOGGER = Logger.getLogger(MasterDispatcher.class);
	private static final PlayerServices pService = new PlayerServicesImpl();
	static ObjectMapper mapper = new ObjectMapper();
	public static Object process(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("In Dispatcher" + request.getRequestURI());
		if(request.getRequestURI().contains("Login")){
			LOGGER.info("Starting the login portion of the dispatcher");
			
			//get parameters
			//username, password
				//from a jackson object
			Player input = null;
            Player returned = null;
            LOGGER.info(request.toString());// idk if this will work, could just return the hash/ mem location
			LOGGER.info(request.getContentType());
			LOGGER.info(request.getReader().readLine());
            if(request.getHeader("Content-Type").equals("application/json")){
                try{
                    input = mapper.readValue(request.getReader(), Player.class);
                    LOGGER.info("loging service inputted object: "+input);
                    returned = pService.attemptLogin(input.getUsername(), input.getPassword());
                } catch (JsonParseException e){
                    LOGGER.error("Master Dispatcher Login Error: JsonParse error in login", e);
                    return "Error in parse";
                } catch (JsonMappingException e){
                    LOGGER.error("Master Dispatcher Login Error: JsonMapping error in login", e);
                    return "Error in mapping";
                } catch (IOException e){
                    LOGGER.error("Master Dispatcher Login Error: IOException in login", e);
                    return "IO error";
                }
            }
			//write response
			response.setContentType("application/json");
			String jsonInString = mapper.writeValueAsString(returned);
			LOGGER.info("LOGIN OBJECT RETURNED: as JSON STRING:  "+jsonInString);
			response.getWriter().write(jsonInString);

			return response; 
		}
		return null;
	}
}
