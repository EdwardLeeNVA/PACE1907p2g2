package com.revature.dnd_generator.exceptions;

public class UserRegistrationFailedException extends Exception {

	private static final long serialVersionUID = 1140843724695903584L;
	
	public UserRegistrationFailedException() {
		super();
	}
	
	public UserRegistrationFailedException(Exception e) {
		super(e);
	}
}
