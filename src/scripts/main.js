;(function() {
	"use strict";

	var userLogin = prompt("Who did come?");

	if (userLogin != null && userLogin != "") {
		if (userLogin == "Admin") {
			var password = prompt("Enter the password");
			if (password != null) {
				if (password == "Black Ruler") {
					console.log("Welcome!");
				} else {
					console.log("Password is incorrect!");
				}
			} else {
				console.log("Action is cancelled");
			}
		} else {
			console.log("I do not know you");
		}
	} else {
		console.log("Action is cancelled");
	}

	
	
})();