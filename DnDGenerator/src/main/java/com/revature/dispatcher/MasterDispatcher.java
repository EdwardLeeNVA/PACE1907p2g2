package com.revature.dispatcher;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MasterDispatcher {
	private MasterDispatcher() {}

	public static Object process(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("In Dispatcher" + request.getRequestURI());
		return null;
	}
}
