package com.revature.dnd_generator.data;

import java.sql.Connection;

import com.revature.dnd_generator.utilities.ConnectionHandler;

public class Dao {
	
	Connection getConnection() {
		return ConnectionHandler.getInstance().getConnection();
	}

	Dao() { }
}
