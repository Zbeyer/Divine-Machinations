import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

Meteor.methods({
	async registerUser(userData) {
		check(userData, {
			username: String,
			email: String,
			password: String
		});

		const existingUser = await Meteor.users.findOneAsync({ "emails.address": userData.email });

		if (existingUser) {
			throw new Meteor.Error(403, "Email is already in use.");
		}

		const userId = Accounts.createUser({
			username: userData.username,
			email: userData.email,
			password: userData.password
		});

		return userId; // Returns the new user's ID
	}
});
