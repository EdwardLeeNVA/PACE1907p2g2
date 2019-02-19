package com.revature.dnd_generator.exceptions;

public class CharacterDeletionFailedException extends Exception {

	private static final long serialVersionUID = -5417353783213897577L;

	public CharacterDeletionFailedException() {
		super();
	}
	
	public CharacterDeletionFailedException(Exception e) {
		super(e);
	}
}
