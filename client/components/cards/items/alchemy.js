import { Session } from 'meteor/session';
const alchemyCards = [

	{
		rank: "-",
		name: "Spark Dew",
		type: "item",
		sub: "Alchemy",
		price: "3gp / 1L",
		image: "https://i.imgur.com/IlCuCbk.jpeg",
		description: `
			Liquid fuel used for most things. Refined from elemental salts, lumin essance, and other common trade goods.
		`
	},
	{
		rank: "-",
		name: "Glimmer Water",
		type: "item",
		sub: "Alchemy",
		price: "2gp / 1L",
		image: "https://i.imgur.com/nwqd6lZ.jpeg",
		description: `
			Liquid magic. Used in most magitech. Refined from elemental salts, lumin essance, and other common trade goods.
		`
	},
	// {
	// 	rank: "-",
	// 	name: "Aurex Crucible",
	// 	type: "item",
	// 	sub: "Smithing",
	// 	price: "20gp",image: "https://i.imgur.com/DUrjRw4.jpeg",		description: `
	// 		Powered by spark dew. Turns ore into ingots.
	// 	`
	// },
	{
		rank: "-",
		name: "Crystal Vase",
		type: "item",
		sub: "Alchemy",
		price: "10gp",
		image: "https://i.imgur.com/fzmlIZR.jpeg",
		description: `
			AEather quartz and water requid to work. Produces 1 leter of Lumin essence after 30d. AEather quartz consumed.
		`
	},
	{
		rank: "-",
		name: "Lumin Essence",
		type: "item",
		sub: "Alchemy",
		price: "1gp / 3L",
		image: "https://i.imgur.com/q636rjD.jpeg",
		description: `
			Base liquid of most potions. Safe to drink or inject.
		`
	},
	{
		rank: "-",
		name: "HP Potion I",
		type: "item",
		sub: "Potion",
		price: "10gp",
		image: "https://i.imgur.com/Ezo77WC.jpeg",
		description: `
			Regain 1d6 + 6 Hit Points.
		`
	},
	{
		rank: "-",
		name: "HP Potion II",
		type: "item",
		sub: "Potion",
		price: "20gp",
		image: "https://i.imgur.com/5S5AhuU.jpeg",
		description: `
			Regain 2d6 + 12 Hit Points.
		`
	},
	{
		rank: "-",
		name: "HP Potion III",
		type: "item",
		sub: "Potion",
		price: "30gp",
		image: "https://i.imgur.com/93ILXEL.jpeg",
		description: `
			Regain 4d6 + 24 Hit Points.
		`
	},
	{
		rank: "-",
		name: "Crimson Radiance",
		type: "item",
		sub: "Flora",
		price: "10gp",
		image: "https://i.imgur.com/q857qxI.jpeg",
		description: `
			Uncommon field flower. Steeped in 1 cL of lumin essance (like tea) for 1 hour to produce 1 cL of HP Potion I. Item is consumed.
		`
	},
	{
		rank: "-",
		name: "Scarletveil Shroom",
		type: "item",
		sub: "Flora",
		price: "20gp",
		image: "https://i.imgur.com/mypG5Q5.jpeg",
		description: `
			Mostly found in caves. Steeped in 1 cL of HP potion I for 2 hours produces 1 cL of HP Potion II. Item is consumed.
		`
	},
	{
		rank: "-",
		name: "Vitalis Fern",
		type: "item",
		sub: "Flora",
		price: "30gp",
		image: "https://i.imgur.com/ckiATg3.jpeg",
		description: `
			Rare deep forest plant. Steeped in 1 cL of HP potion II for 3 hours produces 1 cL of HP Potion III. Item is consumed.
		`
	},
	{
		rank: "-",
		name: "Mana Potion I",
		type: "item",
		sub: "Potion",
		price: "10gp",
		image: "https://i.imgur.com/J6ylJlN.jpeg",
		description: `
			As a Bonus Action, inject this into a magitech's power stone. A spell slot of first level is immediatly restored.
		`
	},
	{
		rank: "-",
		name: "Azuralis Bloom",
		type: "item",
		sub: "Flora",
		price: "8gp",
		image: "https://i.imgur.com/hG7W3UW.jpeg",
		description: `
			Steeped in 1 cL of lumin essance (like tea) for 3 hours to produce 1 cL of Mana Potion I. Item is consumed.
		`
	},
	{
		rank: "-",
		name: "Single",
		type: "item",
		sub: "Potion",
		image: "https://i.imgur.com/Xt9MphA.jpeg",
		description: `
			1 mL of fluid—as a Bonus Action—you can drink, feed, or inject this into a willing or unconscious creature or object (including yourself) within 5ft. Potion's price and effects are described seperately.
		`
	},
	{
		rank: "-",
		name: "Dose",
		type: "item",
		sub: "Potion",
		image: "https://i.imgur.com/fXzgoHV.jpeg",
		description: `
			1 minute to prepare 5 singles. Often bought by average consumers.
		`
	},
	{
		rank: "-",
		name: "Case",
		type: "item",
		sub: "Potion",
		image: "https://i.imgur.com/7G32W2E.jpeg",
		description: `
			8 singles in a small container. Often carried by field medics.
		`
	},
	{
		rank: "-",
		name: "Box",
		type: "item",
		sub: "Potion",
		image: "https://i.imgur.com/4WDQYEB.jpeg",
		description: `
			24 singles in a larger container. Often carried by military logistic troops.
		`
	},
];

alchemyCards.forEach((card) => {
	// Meteor.Session.cards.push(card);
	const existingCards = Session.get('cards') || [];
	existingCards.push(card);
	Session.set('cards', existingCards);
});