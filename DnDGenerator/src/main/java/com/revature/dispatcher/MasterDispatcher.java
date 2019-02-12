package com.revature.dispatcher;

import java.io.IOException;
import com.revature.services.PlayerServices;
import com.revature.services.playerServicesImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MasterDispatcher {
	private MasterDispatcher() {}
	private static final PlayerServices pService = new playerServicesImpl();

	public static Object process(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("In Dispatcher" + request.getRequestURI());
		if(request.getRequestURI().contains("Login")){
			System.out.println("in the Login part of the dispatcher");
			return pService.attemptLogin("EDLEE", "33BFD2FCED3E6E050F32170D9C318F32");
		}
		return null;
	}
}
