import { Session } from 'meteor/session';
const newCards = [
	{
		rank: "-",
		name: "Bullet",
		type: "item",
		sub: "Ammo",
		price: "1gp for 30",
		image: "https://i.imgur.com/kinjF4r.jpeg",
		description: `
			Weapon damage
		`
	},
	{
		rank: "-",
		name: "Premium Bullet",
		type: "item",
		sub: "Ammo",
		price: "1gp for 10",
		image: "https://i.imgur.com/BxjjF9c.jpeg",
		description: `
			Weapon damage x 2
		`
	},
	{
		rank: "-",
		name: "Death Shot",
		type: "item",
		sub: "Ammo",
		price: "1GP per Shot",
		image: "https://i.imgur.com/nZ3IEwD.jpeg",
		description: `
			Weapon damage + 2d6 necrotic
		`
	},
	{
		rank: "-",
		name: "Fire Bomb",
		type: "item",
		sub: "Ammo",
		price: "1GP per Shot",
		image: "https://i.imgur.com/i9kfUa1.jpeg",
		description: `
			Level 3 Fireball spell shot
			<hr>
			To hit: DEX attack<br>
			<hr>
			If hit:<br>
			Spell save DC: 18<br>
			Spell attack modifier 0<br>
		`
	},
	{
		rank: "-",
		name: "Anti-Personel Round",
		type: "item",
		sub: "Ammo",
		price: "1GP per Shot",
		image: "https://i.imgur.com/RR5QIpB.jpeg",
		description: `
			Weapon damage + 2d6 poison.
		`
	},
	{
		rank: "-",
		name: "Solar Shot",
		type: "item",
		sub: "Ammo",
		price: "1GP per Shot",
		image: "https://i.imgur.com/fwuGUeK.jpeg",
		description: `
			Weapon damage + 2d6 radiant.
		`
	},
	{
		rank: "-",
		name: "Concussive Round",
		type: "item",
		sub: "Ammo",
		price: "1GP per Shot",
		image: "https://i.imgur.com/9IIKK5U.jpeg",
		description: `
			Weapon damage + 1d6 force.
		`
	},
	{
		rank: "-",
		name: "Charged Shot",
		type: "item",
		sub: "Ammo",
		price: "1GP per Shot",
		image: "https://i.imgur.com/LZRqsTk.jpeg",
		description: `
			Level 3 Lightning Bolt spell shot
			<hr>
			To hit: DEX attack<br>
			<hr>
			If hit:<br>
			Spell save DC: 18<br>
			Spell attack modifier 0<br>
		`
	},
];

newCards.forEach((card) => {
	// Meteor.Session.cards.push(card);
	const existingCards = Session.get('cards') || [];
	existingCards.push(card);
	Session.set('cards', existingCards);
});