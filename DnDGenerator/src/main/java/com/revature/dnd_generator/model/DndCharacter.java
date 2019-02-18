package com.revature.dnd_generator.model;

public class DndCharacter {
	
	public static final int MAX_NUM_PROFS = 4;
	private int playerId = 0;
	private String name = null;
	private String race = null;
	private String dndClass = null;
	private String[] proficiencies = null;	
	
	public DndCharacter() {
	}	

	public int getPlayerId() {
		return playerId;
	}
	
	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRace() {
		return race;
	}
	public void setRace(String race) {
		this.race = race;
	}
	public String getDndClass() {
		return dndClass;
	}
	public void setDndClass(String dndClass) {
		this.dndClass = dndClass;
	}
	
	public String[] getProficiencies() {
		return proficiencies;
	}
	
	public void setProficiencies(String[] proficiencies) {
		this.proficiencies = proficiencies;
	}
}
