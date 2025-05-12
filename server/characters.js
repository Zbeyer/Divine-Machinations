import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

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

		console.log("Default characters added!");
	}
});

export const Characters = new Mongo.Collection('characters');
Meteor.methods({
	async getCharacterPool() {
		if (!this.userId) {
			throw new Meteor.Error(403, "You must be logged in to access the character pool.");
		}

		return await Characters.find().fetch();
	},
});