// import {Template} from "meteor/templating";
//
// // https://docs.meteor.com/api/session.html
// Template.cards.helpers({
// 	deck: function (): any {
// 		let cards = Session.get("cards") || [];
// 		return cards;
// 	}
// });
//
// // G_Cards = G_Cards || [];
// // G_Cards += [
//
//
// // 	{
// // 		rank: "1",
// // 		name: "Servitorb",
// // 		type: "creature",
// // 		sub: "construct",
// // 		image: "https://i.imgur.com/71UwASG.jpeg",
// // 		price: "WIZ 1 | AC: 10",
// // 		description: `
// // 			Constructs are immune to poison.<br>
// // 		`
// // 	},
// // 	{
// // 		rank: "1",
// // 		name: "Cephalith Worker",
// // 		type: "creature",
// // 		sub: "Abberation",
// // 		image: "https://i.imgur.com/Qhxlial.jpeg",
// // 		price: "HP: 4 | AC: 10 | Small | WIZ 1",
// // 		description: `
// // 		STR 10 | CON 09 | DEX 09<br>
// // 		INT 07 | WIS 09 | CHA 03<br>
// // 		Walk: 20 | Burrow: 20<br>
// // 		Resistant to cold.<br>
// // 		<i>Tunnellers. The start of the cephalith lifecycle.</i>
// // 		`
// // 	},
// // 	{
// // 		rank: "2",
// // 		name: "Cephalith Crawler",
// // 		type: "creature",
// // 		sub: "Aberration",
// // 		image: "https://i.imgur.com/ceiOrJS.jpeg",
// // 		price: "HP: 8 | AC: 10 | Small | WIZ 2",
// // 		description: `
// // 		STR 10 | CON 10 | DEX 11<br>
// // 		INT 09 | WIS 11 | CHA 05<br>
// // 		Walk: 30<br>
// // 		Resistant to cold.<br>
// // 		<br>
// // 		<i>Basic Cephalith, hasn't transformed into something worse, yet.</i>
// // 		`
// // 	},
// // 	{
// // 		rank: "3",
// // 		name: "Cephalith Flyer",
// // 		type: "creature",
// // 		sub: "Aberration",
// // 		image: "https://i.imgur.com/AWxjYx8.jpeg",
// // 		price: "HP 12 | AC: 12 | Med | WIZ 2",
// // 		description: `
// // 		STR 09 | CON 10 | DEX 13<br>
// // 		INT 11 | WIS 12 | CHA 07<br>
// // 		Fly: 45<br>
// // 		Resistant to cold.<br>
// // 		Ignores difficult terrain.<br>
// // 		<i>Scouts.</i>
// // 		`
// // 	},
// // 	{
// // 		rank: "5",
// // 		name: "Cephalith Overseer",
// // 		type: "creature",
// // 		sub: "Aberration",
// // 		image: "https://i.imgur.com/9gXxoBl.jpeg",
// // 		price: "HP: 20 | AC: 15 | Large | WIZ 3",
// // 		description: `
// // 		Walk: 25<br>
// // 		STR 08 | CON 11 | DEX 09<br>
// // 		INT 15 | WIS 13 | CHA 10<br>
// // 		Saves: INT | WIS <br>
// // 		Resistant to cold.<br>
// // 		Command is a bonus action.<br>
// // 		Telepathy 40ft.<br>
// // 		<i>Psionic commanders.</i>
// // 		`
// // 	},
// // 	{
// // 		rank: "8",
// // 		name: "Cephalith Tank",
// // 		type: "creature",
// // 		sub: "Aberration",
// // 		image: "https://i.imgur.com/YJqj4He.jpeg",
// // 		price: "HP: 72 | AC: 18 | Large | WIZ 2",
// // 		description: `
// // 		Walk: 25<br>
// // 		STR 15 | CON 13 | DEX 09<br>
// // 		INT 07 | WIS 11 | CHA 05<br>
// // 		Saves: STR | CON <br>
// // 		Resistant to cold.<br>
// // 		Resistant to non-magical.<br>
// // 		<i>Protectors of the hive.</i>
// // 		`
// // 	},
//
// // 	{
// // 		rank: "1/4",
// // 		type: "ability",
// // 		sub: "Aberration",
// // 		price: "Action",
// // 		name: "Tentacle Slap",
// // 		description: `
// // 			Melee attack dealing 1d8 bludgeoning damage.
// // 		`
// // 	},
// // 	{
// // 		rank: "1/4",
// // 		type: "ability",
// // 		sub: "Aberration",
// // 		price: "Bonus",
// // 		name: "Psychic Jolt",
// // 		description: `
// // 			Target within 30 feet takes 1d6 psychic damage (DC 11 Intelligence save for half).
// // 		`
// // 	}
// // ];