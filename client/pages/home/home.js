const updateCharacterField = (event, template) => {
	const inputElement = event.currentTarget;
	const field = inputElement.dataset.field;
	const newValue = inputElement.value.trim();

	if (!newValue) return; // Prevent empty updates

	// Restore span with updated text
	const spanElement = template.$(`.editable[data-field="${field}"]`);
	spanElement.text(newValue);
	spanElement.show();
	inputElement.style.display = "none"; // Hide input field

	// Save changes to the database
	const characterId = Session.get("activeCharacter");
	Meteor.call("updateCharacterField", characterId, field, newValue, (error) => {
		if (error) {
			console.error("Failed to update character:", error);
			return;
		}
		Meteor.call("getCharacterPool", function (error, result) {
			if (!error) {
				Session.set("characterPool", result);
			}
		});
	});
};

Template.home.onCreated(function () {
	this.character = new ReactiveVar(null); // Ensure it's defined

	this.autorun(() => {
		const characterId = Session.get("activeCharacter");

		if (!characterId) {
			console.warn("No active character set in session.");
			this.character.set(null); // Clear old character data
			return;
		}

		Meteor.call("fetchCharacterById", characterId, (error, result) => {
			if (error) {
				console.error("Error fetching character:", error);
				return;
			}
			console.log("Fetched character:", result);
			this.character.set(result); // Update character data reactively
		});
	});
});
Template.home.helpers({
	activeCharacter() {
		return Session.get("activeCharacter");
	},
	character() {
		return Template.instance().character.get();
	}
});
Template.home.events({
	// Click span to show input field
	'click .editable'(event, template) {
		document.querySelectorAll('.edit-input').forEach(input => {
			input.style.display = 'none'; // Hide all input fields
		});
		document.querySelectorAll('.editable').forEach(span => {
			span.style.display = 'inline-block'; // Show all spans
		});
		const fieldElement = event.currentTarget;
		const inputElement = template.$(`.edit-input[data-field="${fieldElement.dataset.field}"]`);

		inputElement.val(fieldElement.innerText); // Set initial value
		inputElement.show().focus(); // Display input field
		fieldElement.style.display = "none"; // Hide span
	},

	'blur .edit-input'(event, template) {
		updateCharacterField(event, template); // Call function on blur
	},

	'keydown .edit-input'(event, template) {
		if (event.key === "Escape") {
			const field = event.currentTarget.dataset.field; // Get the field from data attribute
			event.preventDefault(); // Prevent any default behavior
			const inputElement = event.currentTarget;
			const spanElement = template.$(`.editable[data-field="${field}"]`);
			spanElement.show();
			inputElement.style.display = "none"; // Hide input field
			return; // Exit function on Escape key
		}
		if (event.key === "Enter") {
			event.preventDefault(); // Prevent default form submission
			updateCharacterField(event, template); // Call function on Enter key
		}
	}
});
