Template.characterPool.helpers({
	characterList: function () {
		return Session.get("characterPool") || [];
	},
	currentUser: function () {
		console.log("Current user:", Meteor.user());
		return Meteor.user(); // Ensures it always returns an object
	}
});

Template.characterPool.events({
	'click .create-character'(event) {
		Meteor.call('makeNewCharacter', (error, result) => {
			if (error) {
				console.error("Error creating character:", error);
			} else {
				console.log("Character created:", result);
			}
		});

		Meteor.call("getCharacterPool", function (error, result) {
			if (!error) {
				Session.set("characterPool", result);
			}
		});
	},
	'click .character'(event) {
		const characterId = event.currentTarget.dataset.id; // Gets the data-id attribute
		if (!characterId) return;

		Session.set("activeCharacter", characterId); // Store active character in session
		console.log("Active character set:", characterId);
	}
});

Tracker.autorun(() => {
	let pool = Session.get("characterPool");
	if (Meteor.userId() && !pool) {
		Meteor.call("getCharacterPool", function (error, result) {
			if (!error) {
				Session.set("characterPool", result);
				pool = Session.get("characterPool");
				console.log("Character pool set: %o", pool);
			}
		});
	}
});
