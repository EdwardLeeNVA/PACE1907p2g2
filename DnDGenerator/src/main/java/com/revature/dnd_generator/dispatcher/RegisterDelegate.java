package com.revature.dnd_generator.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dnd_generator.model.Player;
import com.revature.dnd_generator.services.PlayerServices;
import com.revature.dnd_generator.services.PlayerServicesImpl;

public class RegisterDelegate implements BaseDelegate{
	private static final PlayerServices pService = new PlayerServicesImpl();
	private static final ObjectMapper mapper = new ObjectMapper();

	@Override
	public void process(HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException, IOException {
		Player input = mapper.readValue(request.getReader(), Player.class);
		Boolean b = pService.createPlayer(input.getUsername(), input.getPassword());
		response.setContentType("application/json");
		response.getWriter().write(mapper.writeValueAsString(b));	
	}
}
