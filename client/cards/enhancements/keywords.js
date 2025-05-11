import {Session} from 'meteor/session';

const newCards = [{
	rank: "1",
	name: "Magic Item +1",
	type: "keyword",
	sub: "Enhancement",
	price: "30GP",
	image: "https://i.imgur.com/hj1uzm7.jpeg",
	description: `
			Magic Item +1
		`
}, {
	rank: "2",
	name: "Magic Item +2",
	type: "keyword",
	sub: "Enhancement",
	price: "80GP",
	image: "https://i.imgur.com/wKLHrJa.jpeg",
	description: `
			Magic Item +2
		`
}, {
	rank: "3",
	name: "Magic Item +3",
	type: "keyword",
	sub: "Enhancement",
	price: "210GP",
	image: "https://i.imgur.com/81HXu8G.jpeg",
	description: `
			Magic Item +3
		`
}, {
	rank: "4",
	name: "Magic Item +4",
	type: "keyword",
	sub: "Enhancement",
	price: "550GP",
	image: "https://i.imgur.com/iq4ffQx.jpeg",
	description: `
			Magic Item +4
		`
}, {
	rank: "5",
	name: "Magic Item +5",
	type: "keyword",
	sub: "Enhancement",
	price: "1,500GP",
	image: "https://i.imgur.com/2T4TCFr.jpeg",
	description: `
			Magic Item +5
		`
}, {
	rank: "6",
	name: "Magic Item +6",
	type: "keyword",
	sub: "Enhancement",
	price: "5,000GP",
	image: "https://i.imgur.com/ZNlBR5m.jpeg",
	description: `
			Magic Item +6
		`
}, {
	rank: "1",
	name: "Taunt",
	type: "keyword",
	sub: "Action",
	price: "30 Red Elemental Salts",
	image: "https://i.imgur.com/x83nL0T.jpeg",
	description: `
		Enemies within 30 ft. have a DC 15 WIS check to target anyone but the user as a primary for a weapon attack or spell.<br>
		Enemies within 30 ft. have a DC 15 WIS check to use an item.
		`
}, {
	rank: "2",
	name: "Frost Brand",
	type: "keyword",
	sub: "Passive",
	image: "https://i.imgur.com/wMscna6.jpeg",
	price: "50 Blue Elemental Salts",
	description: `
		Deal an extra 1d6 Cold damage. <br>
		Resistance to Fire damage. <br>
		In freezing temperatures, the weapon sheds light 10/10 <br>
		Once an hour you may extinguish all nonmagical flames within 30 feet.
		`
}, {
	rank: "1",
	name: "Flame Toung",
	type: "keyword",
	sub: "Bonus",
	price: "30 Red Elemental Salts",
	image: "https://i.imgur.com/KhymlTW.jpeg",
	description: `
		Deal an extra 2d6 fire damage. <br>
		Light 40/40 <br>
		`
},

];

newCards.forEach((card) => {
	// Meteor.Session.cards.push(card);
	const existingCards = Session.get('cards') || [];
	existingCards.push(card);
	Session.set('cards', existingCards);
});