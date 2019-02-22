package com.revature.dnd_generator.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;

public interface BaseDelegate {
	void process(HttpServletRequest req, HttpServletResponse res) throws JsonProcessingException, IOException;
}
