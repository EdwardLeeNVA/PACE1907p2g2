<html>
<body>
<h2>Hello World!</h2>
<form onsubmit="signIn(); return false" id="signinform">
	<input type="text" placeholder="username" id="userName" name="username">
	<input type="text" placeholder="password" id="password" name="password">
	<button type="submit">Submit</button>
</form>
</body>
<script>
	function signIn(){
			let newRequest = new XMLHttpRequest();
			newRequest.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200){
				console.log("Success");
				console.log(this.responseText);
				}
			};
			let stringy = "{username:"+document.getElementById("userName")+", id:\"0\", password:\"PASSWORD\"}";
			newRequest.open("POST", "Generator/Login", true);
			newRequest.setRequestHeader("Content-type", "application/json");
			newRequest.send(stringy);
			console.log()
			console.log("After data sent");
	}
</script>
</html>
