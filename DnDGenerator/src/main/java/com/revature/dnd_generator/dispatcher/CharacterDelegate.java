package com.revature.dnd_generator.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dnd_generator.services.CharacterServices;
import com.revature.dnd_generator.services.CharacterServicesImpl;
import com.revature.dnd_generator.services.PlayerServices;
import com.revature.dnd_generator.services.PlayerServicesImpl;

public class CharacterDelegate implements BaseDelegate{
	CharacterDelegate() {}
	private static final Logger LOGGER = Logger.getLogger(CharacterDelegate.class);
	private static final CharacterServices cService = new CharacterServicesImpl();

	@Override
	public void process(HttpServletRequest req, HttpServletResponse res) throws IOException {
		// TODO Auto-generated method stub
		ObjectMapper mapper = new ObjectMapper();
		//get path length
		String[] path = req.getRequestURI().split("/");
		//get all from current user
		if(path.length == 4) {
			LOGGER.info("Fetching all with userid: " +req.getSession().getAttribute("playerID"));
			res.setContentType("application/json");
			cService.getAllPlayerCharacters(req.getSession().getAttribute("playerId"));
			String jsonInString = mapper.writeValueAsString(cService.getAllPlayerCharacters((int)req.getSession().getAttribute("playerId")));
			LOGGER.info("LOGIN OBJECT RETURNED: as JSON STRING:  "+jsonInString);
			res.getWriter().write(jsonInString);
			}else if(path.length == 5) {//get the requested object
				LOGGER.info("Getting Specific Character: " + path[5]);
				String jsonInString = mapper.writeValueAsString(cService.getDndCharacter(Integer.parseInt(path[5])));
				LOGGER.info("Acquired Character: " + jsonInString);
				res.getWriter().write(jsonInString);
		}else {
			LOGGER.info("Unexpected Path Length" +req.getRequestURI() +" length of "+ path.length );
		}
	}
}
