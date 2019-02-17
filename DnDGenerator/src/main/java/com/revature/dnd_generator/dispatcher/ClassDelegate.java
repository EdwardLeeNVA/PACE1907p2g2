package com.revature.dnd_generator.dispatcher;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

public class ClassDelegate {
	private static final Logger LOGGER = Logger.getLogger(CharacterDelegate.class);
	private ClassDelegate() {}

	public static Object processClass( HttpServletRequest req, HttpServletResponse resp) {
		String[] path = req.getRequestURI().split("/");
		//get all from current user
		LOGGER.info("Path: " + req.getRequestURI());
		LOGGER.info("Class Delegate Class length: " + path.length);
		if(path.length == 4) {
			LOGGER.info("GETTING ALL THE CLASSES: currently testing attributes: " + req.getSession().getAttribute("playerID"));
		}else if(path.length == 5) {//get the requested object
			LOGGER.info("Getting Specific Class: " + path[5]);
		}else {
			LOGGER.info("Unexpected Path Length" +req.getRequestURI() +" length of "+ path.length );
		}
		return "String";
	}
}
