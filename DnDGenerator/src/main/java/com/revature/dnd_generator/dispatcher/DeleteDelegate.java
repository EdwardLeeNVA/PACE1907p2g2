package com.revature.dnd_generator.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dnd_generator.model.DndCharacter;
import com.revature.dnd_generator.services.CharacterServices;
import com.revature.dnd_generator.services.CharacterServicesImpl;

public class DeleteDelegate implements BaseDelegate {
	ObjectMapper mapper = new ObjectMapper();
	CharacterServices cServices = new CharacterServicesImpl();
	private static final Logger LOGGER = Logger.getLogger(LoginDelegate.class);
	DeleteDelegate(){}
	@Override
	public void process(HttpServletRequest req, HttpServletResponse res) throws JsonProcessingException, IOException {
		if(req.getHeader("Content-Type").equals("application/json")){
			DndCharacter input;
			try {
				LOGGER.info("Top of delete");
				input = mapper.readValue(req.getReader(),DndCharacter.class);
				LOGGER.info("Deleting ...: " + input.getId() + " " + input.getName());
				res.setContentType("application.json");
				boolean b = cServices.deleteCharacter(input);
				LOGGER.info("deleted: " + b);
				res.getWriter().write(mapper.writeValueAsString(b));
				
            } catch (JsonParseException e){
                LOGGER.error("Master Dispatcher Login Error: JsonParse error in login", e);
            } catch (JsonMappingException e){
                LOGGER.error("Master Dispatcher Login Error: JsonMapping error in login", e);
            } catch (IOException e){
                LOGGER.error("Master Dispatcher Login Error: IOException in login", e);
            }		
		}
	}

}
