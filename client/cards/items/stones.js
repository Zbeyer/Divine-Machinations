import { Session } from 'meteor/session';
const newCards = [
	{
		rank: "1",
		name: "AEther Quartz",
		type: "item",
		sub: "Power Stone",
		price: "10GP",
		image: "https://i.imgur.com/LPJYbPx.jpeg",
		description: `
			<strong>Infusion</strong>: 1
		`
	},
	{
		rank: "2",
		name: "Skyfire Opal",
		type: "item",
		sub: "Power Stone",
		price: "20GP",
		image: "https://i.imgur.com/f5LV6Zw.jpeg",
		description: `
			<strong>Infusion</strong>: 2
		`
	},
	{
		rank: "3",
		name: "Voidstone",
		type: "item",
		sub: "Power Stone",
		price: "50GP",
		image: "https://i.imgur.com/melACO3.jpeg",
		description: `
			<strong>Infusion</strong>: 3
		`
	},
	{
		rank: "4",
		name: "Arcanite Crystal",
		type: "item",
		sub: "Power Stone",
		price: "120GP",
		image: "https://i.imgur.com/6OCYI6k.jpeg",
		description: `
			<strong>Infusion</strong>: 4
		`
	},
	{
		rank: "5",
		name: "Etherium Shard",
		type: "item",
		sub: "Power Stone",
		price: "250GP",
		image: "https://i.imgur.com/7HINHAH.jpeg",
		description: `
			<strong>Infusion</strong>: 5
		`
	},
	{
		rank: "6",
		name: "Soulfire Emerald",
		type: "item",
		sub: "Power Stone",
		price: "300GP",
		image: "https://i.imgur.com/KsFYyb6.jpeg",
		description: `
			<strong>Infusion</strong>: 6
		`
	},
];

newCards.forEach((card) => {
	// Meteor.Session.cards.push(card);
	const existingCards = Session.get('cards') || [];
	existingCards.push(card);
	Session.set('cards', existingCards);
});