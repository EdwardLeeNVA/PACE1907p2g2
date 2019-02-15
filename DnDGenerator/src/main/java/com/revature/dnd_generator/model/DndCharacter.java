package com.revature.dnd_generator.model;

public class DndCharacter {
	
	private int id = 0; //I did 0 since it can't be assigned null, and the sequence doesn't generate 0s feel free to change this if you know a better practice
	private String name = null;
	private String race = null;
	private String dndClass = null;
	private String prof1 =null;
	private String prof2 =null;
	private String prof3 =null;
	private String prof4 =null;	
	
	public DndCharacter() {
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

	public String getProf1() {
		return prof1;
	}

	public void setProf1(String prof1) {
		this.prof1 = prof1;
	}

	public String getProf2() {
		return prof2;
	}

	public void setProf2(String prof2) {
		this.prof2 = prof2;
	}

	public String getProf3() {
		return prof3;
	}

	public void setProf3(String prof3) {
		this.prof3 = prof3;
	}

	public String getProf4() {
		return prof4;
	}

	public void setProf4(String prof4) {
		this.prof4 = prof4;
	}


}
