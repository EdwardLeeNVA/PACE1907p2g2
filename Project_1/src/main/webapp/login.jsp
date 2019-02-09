<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Expenses Log In</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</head>
<body>
	<!-- Header in the middle of the page -->
	<h1 style="text-align:center">Log In Portal</h1>
	<!-- 2 inputs one button 2 labels 1 form -->
	<div class="container">
	<form method="POST" action="services/login" accept-charset="utf-8">
  	<div class="form-group">
    	<label for="formGroupExampleInput">Username</label>
    	<input type="text" class="form-control" id="username" name="username" placeholder="Username">
  	</div>
  	<div class="form-group">
    	<label for="formGroupExampleInput2">Password</label>
    	<input type="password" class="form-control" id="password" name="password" placeholder="Password">
 		</div>
 	  <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
	</form>
	</div>
</body>
</html>