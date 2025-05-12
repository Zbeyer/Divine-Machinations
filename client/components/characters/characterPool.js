Template.characterPool.helpers({
	characterList: function () {
		return Session.get("characterPool") || [];
	},
	currentUser: function () {
		console.log("Current user:", Meteor.user());
		return Meteor.user(); // Ensures it always returns an object
	}
});

// Template.characterPool.events({
// 	"click .character"(event, template) {
// 		const selectedCharacter = this; // Access the clicked character's data
// 		console.log("Activated character:", selectedCharacter.name);
//
// 		// Example action: Store the active character in a Session variable
// 		Session.set("activeCharacter", selectedCharacter);
// 	}
// });


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
