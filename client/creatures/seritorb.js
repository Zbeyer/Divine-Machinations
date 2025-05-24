const monsterManual = Session.get('monsterDeck') || [];
monsterManual.push({
	"name": "Seritorb, Arcane Service Orb",
	"faction": "servants",
	"meta": "Small construct, lawful neutral",
	"Armor Class": "14 (Arcane Shielding)",
	"Hit Points": 22,
	"Speed": "0 ft., fly 40 ft. (hover)",
	"STR": 6,
	"DEX": 14,
	"CON": 12,
	"INT": 16,
	"WIS": 12,
	"CHA": 10,
	"Skills": {
		"Arcana": "+5",
		"Investigation": "+5",
		"Perception": "+3"
	},
	"Senses": "Darkvision 60 ft., Passive Perception 13",
	"Languages": "Understands all languages but cannot speak",
	"Challenge": "1 (200 XP)",
	"Traits": {
		"Arcane Matrix": "The Seritorb can cast **cantrips** and **1st-level spells** using its internal magical core. Its spellcasting ability is Intelligence (Spell Save DC 13).",
		"Magical Assistance": "It can use its bonus action to grant an ally within 30 ft. **advantage** on their next Intelligence, Wisdom, or Charisma check."
	},
	"Spellcasting": {
		"Cantrips (at will)": ["Mage Hand", "Minor Illusion", "Mending"],
		"1st level (2/day)": ["Shield", "Detect Magic", "Magic Missile"]
	},
	"Actions": {
		"Arcane Pulse": {
			"Ranged Spell Attack": "+5 to hit, range 30 ft., one target.",
			"Hit": "7 (1d8 + 3) force damage."
		}
	}
});
Session.set('monsterDeck', monsterManual);
