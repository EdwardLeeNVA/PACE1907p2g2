package com.revature.model;

public class character {
	String name, race, cClass, bio;
	String jsonProficencies;
	
	
	public character() {
		super();
	}	
	public character(String name, String race, String cClass, String bio, String jsonProficencies) {
		super();
		this.name = name;
		this.race = race;
		this.cClass = cClass;
		this.bio = bio;
		this.jsonProficencies = jsonProficencies;
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
	public String getcClass() {
		return cClass;
	}
	public void setcClass(String cClass) {
		this.cClass = cClass;
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
