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
import com.fasterxml.jackson.databind.ObjectMapper;

public class RaceDelegate implements BaseDelegate{
	static ObjectMapper mapper = new ObjectMapper();
	private static final Logger LOGGER = Logger.getLogger(MasterDispatcher.class);
	RaceDelegate(){};
	@Override
	public void process(HttpServletRequest req, HttpServletResponse res) throws JsonProcessingException, IOException {
		LOGGER.info("new race");
		res.setContentType("application/json");
		try {
			String u = "http://dnd5eapi.co/api/races/";
			URL url = new URL(u);
			HttpURLConnection http = (HttpURLConnection) url.openConnection();
			http.setRequestMethod("GET");
			BufferedReader in = new BufferedReader (new InputStreamReader(http.getInputStream()) );
			String inputLine;
			StringBuffer sb = new StringBuffer();
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
	}
	
}
