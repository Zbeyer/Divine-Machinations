const makeNewUser = function (event) {
	event.preventDefault();

	let usernameInput = document.getElementById("register-username");
	let emailInput = document.getElementById("register-email");
	let passwordInput = document.getElementById("register-password");

	if (!usernameInput || !emailInput || !passwordInput) {
		console.error("One or more input fields are missing from the DOM.");
		return;
	}

	let username = usernameInput.value;
	let email = emailInput.value;
	let password = passwordInput.value;

	if (!(username || email || password)) {
		console.error("One or more input fields are empty.");
		return;
	}

	Meteor.call("registerUser", { username: username, email: email, password: password }, function (error, result) {
		if (error) {
			console.error("Registration failed: %o", error);
			return;
		}
		alert("User registered successfully! User ID: " + result);
	});
};


Template.register.events({
	'submit #registerForm': function (event) {
		makeNewUser(event);
	},
	'click .register-button': function (event) {
		makeNewUser(event);
	},
	'keyup input': function (event) {
		if (event.keyCode === 13 || event.key === "Enter") {
			makeNewUser(event);
		}
	}
});

