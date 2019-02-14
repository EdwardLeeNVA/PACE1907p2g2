package com.revature.dnd_generator.exceptions;

public class ConnectionFailedException extends RuntimeException {
	
	private static final long serialVersionUID = 1298744806172004992L;
	
	public ConnectionFailedException(Exception e) {
		super(e);
	}
}
