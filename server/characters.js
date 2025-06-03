import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Characters = new Mongo.Collection('characters');

Meteor.startup(async () => {
	const characterCount = await Characters.find().countAsync();
	// If the collection is empty, add a default character
	if (characterCount === 0) {
		await Characters.insertAsync({
			name: "Steve",
			// ability scores and currencies
			str: 22,
			dex: 12,
			con: 14,
			int: 11,
			wis: 13,
			cha: 9,
			dtp: 12,
			xp: 64,
			gp: 30,
			// classes are unlocked but not infused
			unlocked: [
				{
					fighter: 3,
					paladin: 2,
					cleric: 1,
				}
			],
			// all abilities are infused into gear
			inventory: [
				{
					name: "Warpfang",
					type: "melee",	// Should probably be an enum — melee, ranged, armor, shield, etc.
					ac: 0,			// armor class is added
					hp: 0,			// hit points are added
					ss: 0,			// spell slots are added
					weight: 3,
					bonus: 1, 	// Magic item bonus
					gem: 3,		// infusion limit
					infusions: [
						"taunt",		// may need to rewrite these to be keys
						"flame tongue",
					],
				},
				{
					name: "helmet",
					type: "armor",
					ac: 1,
					weight: 1599,
					limit: 1,
					infusions: [
						"resistance fire",
					],
				}
			],
			notes: [
				{
					title: "First note",
					content: "This is the first note for Steve.",
				},
				{
					title: "Second note",
					content: "This is the second note for Steve.",
				}
			]
		});

		console.log("Default character(s) added!");
	}
});

const fetchCharacterPool = async function() {
	if (!Meteor.userId()) {
		throw new Meteor.Error(403, "You must be logged in to access the character pool.");
	}
	if (!Characters) {
		throw new Meteor.Error(500, "Characters collection not found.");
	}


	return await Characters.find().fetch();
}

const makeNewCharacter = async function(character) {
	if (!Meteor.userId()) {
		throw new Meteor.Error(403, "You must be logged in to create a character.");
	}
	if (!Characters) {
		throw new Meteor.Error(500, "Characters collection not found.");
	}

	character = character || {};
	character.name = character.name || "New Character";
	character.description = character.description || "No description provided.";
	character.str = character.str || 10;
	character.dex = character.dex || 10;
	character.con = character.con || 10;
	character.int = character.int || 10;
	character.wis = character.wis || 10;
	character.cha = character.cha || 10;
	character.dtp = character.dtp || 10;
	character.xp = character.xp || 0;
	character.gp = character.gp || 0;
	character.inventory = character.inventory || [];
	character.notes = character.notes || [];
	character.unlocked = character.unlocked || [];

	if (!character || typeof character !== 'object') {
		throw new Meteor.Error(400, "Invalid character data.");
	}

	character.owner = Meteor.userId();
	character.createdAt = new Date();

	const characterId = await Characters.insertAsync(character);
	return characterId;
}

Meteor.methods({
	async getCharacterPool() {
		return fetchCharacterPool();
	},
	async makeNewCharacter(character) {
		return makeNewCharacter(character);
	},
	async fetchCharacterById(characterId) {
		if (!Meteor.userId()) {
			throw new Meteor.Error(403, "You must be logged in to access characters.");
		}

		if (!Characters) {
			throw new Meteor.Error(500, "Characters collection not found.");
		}

		return await Characters.findOneAsync({ _id: characterId });
	},
	async updateCharacterField(characterId, field, newValue) {
		// Validate input
		if (!characterId) throw new Meteor.Error(400, "Character ID is required.");
		if (!field) throw new Meteor.Error(400, "Field name is required.");
		if (newValue === undefined || newValue === null) throw new Meteor.Error(400, "New value cannot be empty.");

		// Construct the update object dynamically
		const updateObj = {};
		updateObj[field] = newValue;

		// Update database asynchronously
		const result = await Characters.updateAsync({ _id: characterId }, { $set: updateObj });

		// Log changes
		console.log(`Character ${characterId} updated: ${field} => ${newValue}`);

		// Return success confirmation
		return result ? "Character updated successfully!" : "Update failed.";
	}
});