package com.revature.data;

import java.sql.Connection;

public class Dao {
	
	Connection getConnection() {
		return ConnectionHandler.getInstance().getConnection();
	}

	Dao() { }
}
