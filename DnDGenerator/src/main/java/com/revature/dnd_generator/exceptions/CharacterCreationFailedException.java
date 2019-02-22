package com.revature.dnd_generator.exceptions;

public class CharacterCreationFailedException extends Exception {
	
	private static final long serialVersionUID = -775977763334413458L;

	public CharacterCreationFailedException() {
		super();
	}
	
	public CharacterCreationFailedException(Exception e) {
		super(e);
	}
}
