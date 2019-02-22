package com.revature.dnd_generator.exceptions;

public class ExistingUsernameException extends UserRegistrationFailedException {

	private static final long serialVersionUID = 2080816714465063716L;
	
	public ExistingUsernameException() {
		super();
	}
	
	public ExistingUsernameException(Exception e) {
		super(e);
	}
}
