package com.revature.data;

import java.sql.Connection;

import com.revature.utilities.ConnectionHandler;

public class Dao {
	
	Connection getConnection() {
		return ConnectionHandler.getInstance().getConnection();
	}

	Dao() { }
}
