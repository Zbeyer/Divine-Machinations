const loginUser = function loginUser(email, password) {
	Meteor.loginWithPassword(email, password, function (error) {
		// if (error) {
		// 	console.error("Login failed:", error.reason);
		// } else {
		// 	console.log("Login successful!");
		// }
	});
}

Template.login.onCreated(function () {
	this.isRegistering = new ReactiveVar(false);
});
Template.login.onRendered(function () {
	// console.log("Login template is now visible!");
});

Template.login.onDestroyed(function () {
	// console.log("Login template removed!");
});
Template.login.helpers({
	isRegistering: function () {
		return Template.instance().isRegistering.get();
	},
	currentUser: function () {
		// console.log("Current user:", Meteor.user());
		return Meteor.user(); // Ensures it always returns an object
	}
});

Template.login.events({
	'submit #loginForm': function (event) {
		event.preventDefault(); // Prevent form from refreshing the page

		let username = event.target.username.value;
		let password = event.target.password.value;

		Meteor.loginWithPassword(username, password, function (error) {
			if (error) {
				console.error("Login failed:", error.reason);
				return;
			}
			console.log("Login successful!");
		});
	},
	'click .logout-button': function () {
		Meteor.logout(function (error) {
			if (error) {
				console.error("Logout failed:", error.reason);
				return;
			}
			console.log("Logout successful!");
		});
	},
	'click .toggle-auth-button': function (event, instance) {
		let currentState = instance.isRegistering.get();
		instance.isRegistering.set(!currentState);
	},
});

