package com.revature.dnd_generator.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dnd_generator.model.Player;
import com.revature.dnd_generator.services.PlayerServices;
import com.revature.dnd_generator.services.PlayerServicesImpl;

public class LoginDelegate implements BaseDelegate{
	private static final Logger LOGGER = Logger.getLogger(LoginDelegate.class);
	private static final PlayerServices pService = new PlayerServicesImpl();
	static ObjectMapper mapper = new ObjectMapper();
	LoginDelegate() {}

	@Override
	public void process(HttpServletRequest req, HttpServletResponse res) throws JsonProcessingException, IOException {
		LOGGER.info("Starting the login portion of the dispatcher");
		
		//get parameters
		//username, password
			//from a jackson object
		Player input = null;
        Player returned = null;
        LOGGER.info(req.getContentType());
		if(req.getHeader("Content-Type").equals("application/json")){
            try{
                input = mapper.readValue(req.getReader(), Player.class);
                LOGGER.info("loging service inputted object: "+input);
                returned = pService.attemptLogin(input.getUsername(), input.getPassword());
            } catch (JsonParseException e){
                LOGGER.error("Master Dispatcher Login Error: JsonParse error in login", e);
            } catch (JsonMappingException e){
                LOGGER.error("Master Dispatcher Login Error: JsonMapping error in login", e);
            } catch (IOException e){
                LOGGER.error("Master Dispatcher Login Error: IOException in login", e);
            }
        }
		if(returned.getId()!=0) {
			req.getSession().setAttribute("playerID", returned.getId());
		}
		//write response
		res.setContentType("application/json");
		String jsonInString = mapper.writeValueAsString(returned);
		LOGGER.info("LOGIN OBJECT RETURNED: as JSON STRING:  "+jsonInString);
		res.getWriter().write(jsonInString);
		
		
	}
	
}
