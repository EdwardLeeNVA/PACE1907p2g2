package com.revature.dnd_generator.dispatcher;

import java.io.IOException;
import java.security.SecureRandom;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class DiceRoller implements BaseDelegate {
	ObjectMapper mapper = new ObjectMapper();
	@Override
	public void process(HttpServletRequest req, HttpServletResponse res) throws JsonProcessingException, IOException {
		// TODO Auto-generated method stub
	      SecureRandom random = new SecureRandom();
		//d4 d6 d10 d12 d20
		//coin?
		String path[] = req.getRequestURI().split("/");
		int randomMax = Integer.parseInt(path[4]);
		randomMax = random.nextInt(randomMax) + 1;
		res.getWriter().write(mapper.writeValueAsString(randomMax));
		
	}

}
