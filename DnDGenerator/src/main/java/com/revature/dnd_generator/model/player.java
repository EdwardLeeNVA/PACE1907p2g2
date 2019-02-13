package com.revature.dnd_generator.model;

public class player {
	String username;
	String password;
	int id;
	public player() {
		super();
	}
	public player(String s, int id) {
		this.setUsername(s);
		this.setId(id);
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}
