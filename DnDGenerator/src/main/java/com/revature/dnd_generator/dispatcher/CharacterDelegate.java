package com.revature.dnd_generator.dispatcher;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class CharacterDelegate {
	private CharacterDelegate() {}
	private static final Logger LOGGER = Logger.getLogger(CharacterDelegate.class);

	public static void processer(HttpServletRequest req, HttpServletResponse resp) {
		//get path length
		
		// if it is 3? or 4?
		String[] path = req.getRequestURI().split("/");
		//get all from current user
		if(path.length == 4) {
			LOGGER.info("Fetching all with userid: " +req.getSession().getAttribute("playerID"));
		}else if(path.length == 5) {//get the requested object
			LOGGER.info("Getting Specific Character: " + path[4]);
		}
	}
}
