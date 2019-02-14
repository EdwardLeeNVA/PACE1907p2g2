package com.revature.dnd_generator.model;

public class Character {
	
	private String name = null;
	private String race = null;
	private String dndClass = null;
	private String bio = null;
	private String jsonProficencies = null;
	
	public Character() {
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
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public String getJsonProficencies() {
		return jsonProficencies;
	}
	public void setJsonProficencies(String jsonProficencies) {
		this.jsonProficencies = jsonProficencies;
	}

}
