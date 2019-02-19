package com.revature.dnd_generator.dispatcher;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;

public class ClassDelegate implements BaseDelegate{
	private static final Logger LOGGER = Logger.getLogger(ClassDelegate.class);
	ClassDelegate() {}
	@Override
	public void process(HttpServletRequest req, HttpServletResponse res) throws JsonProcessingException, IOException {
		String[] path = req.getRequestURI().split("/");
		//get all from current user
		LOGGER.info("Path: " + req.getRequestURI());
		LOGGER.info("Class Delegate Class length: " + path.length);
		if(path.length == 4) {
			LOGGER.info("new class");
			res.setContentType("application/json");
			try {
				String u = "http://dnd5eapi.co/api/classes/";
				URL url = new URL(u);
				HttpURLConnection http = (HttpURLConnection) url.openConnection();
				http.setRequestMethod("GET");
				BufferedReader in = new BufferedReader (new InputStreamReader(http.getInputStream()) );
				String inputLine;
				StringBuilder sb = new StringBuilder();
				LOGGER.info("Before reading");
				while((inputLine = in.readLine()) != null) {
					sb.append(inputLine);
				}
				in.close();
				LOGGER.info("After reading" + sb.toString());
				res.getWriter().write(sb.toString());
			}catch (Exception e) {
				LOGGER.error(e.getMessage());
			}
		}else if(path.length == 5) {//get the requested object
			LOGGER.info("Getting Specific Class: " + path[4]);
			try {
				String u = "http://dnd5eapi.co/api/classes/" + path[4].toLowerCase();
				LOGGER.info("Request url: " + u);
				URL url = new URL(u);
				HttpURLConnection http = (HttpURLConnection) url.openConnection();
				http.setRequestMethod("GET");
				BufferedReader in = new BufferedReader( new InputStreamReader(http.getInputStream()));
				String inputLine;
				StringBuilder sb = new StringBuilder();
				LOGGER.info("Before Reading");
				while((inputLine=in.readLine())!= null) {
					sb.append(inputLine);
				}
				in.close();
				LOGGER.info("AfterClose:\n" + sb.toString());
				res.getWriter().write(sb.toString());
			}catch(Exception e) {
				LOGGER.error(e.getMessage());
			}
		}else {
			LOGGER.info("Unexpected Path Length" +req.getRequestURI() +" length of "+ path.length );
		}		
	}
}
