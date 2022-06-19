function checkCreds() {
	let user = document.getElementById("user").value;
	let pass = document.getElementById("pass").value;
	if (user == "godam" && pass == "Sup3rSecr3t4ndS3cur3P@s$W0rD") 
	{
		console.log("Correct Creds!");
	}else{
		console.log("Wrong Creds!");
	}
}
