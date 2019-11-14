var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "abc" && password == "abc"){
		alert ("Login successfully");
		window.location = "success.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("Incorrect Password !! You have left "+attempt+" attempt;");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}