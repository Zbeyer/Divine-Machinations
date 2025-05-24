const monsterManual = Session.get('monsterDeck') || [];
monsterManual.push({
	"name": "Sentinel Hound, Arcane Guardian",
	"faction": "servants",
	"meta": "Medium construct, lawful good",
	"Armor Class": "16 (Arcane Shielding & Reinforced Plating)",
	"Hit Points": 48,
	"Speed": "50 ft.",
	"STR": 16,
	"DEX": 14,
	"CON": 16,
	"INT": 8,
	"WIS": 12,
	"CHA": 10,
	"Skills": {
		"Perception": "+5",
		"Insight": "+3",
		"Intimidation": "+4"
	},
	"Senses": "Darkvision 60 ft., Passive Perception 15",
	"Languages": "Understands commands in Common, Celestial, and Dwarvish, but cannot speak",
	"Challenge": "3 (700 XP)",
	"Traits": {
		"Arcane Sentinel": "The Sentinel Hound can detect hostile intent within 30 ft. Any creature intending harm must make a DC 14 Wisdom saving throw or have its movements subtly inhibited (disadvantage on Dexterity-based attacks).",
		"Guardian Instinct": "It can use its reaction to impose **disadvantage** on an attack targeting an ally within 5 ft.",
		"Empowered Bite": "Its bite is infused with magical force. The damage it deals counts as magical for overcoming resistance."
	},
	"Actions": {
		"Bite": {
			"Melee Weapon Attack": "+7 to hit, reach 5 ft., one target.",
			"Hit": "14 (2d8 + 5) piercing damage."
		},
		"Arcane Snarl": {
			"Description": "The hound emits a magical snarl, disrupting foes. Each hostile creature within 10 ft. must succeed on a DC 13 Wisdom saving throw or be frightened until the end of its next turn."
		},
		"Charge": {
			"Description": "If the Sentinel Hound moves at least 20 ft. straight toward a creature and then hits it with a Bite attack on the same turn, the target must succeed on a DC 14 Strength saving throw or be knocked prone."
		}
	}
});
Session.set('monsterDeck', monsterManual);
