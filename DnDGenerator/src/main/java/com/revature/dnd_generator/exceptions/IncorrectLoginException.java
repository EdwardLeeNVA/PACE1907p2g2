package com.revature.dnd_generator.exceptions;

public class IncorrectLoginException extends Exception {
	
	private static final long serialVersionUID = -2621992777544804309L;
	
	public IncorrectLoginException() {
		super();
	}
	
	public IncorrectLoginException(Exception e) {
		super(e);
	}
}
