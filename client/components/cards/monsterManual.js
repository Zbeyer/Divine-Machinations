// mm for monster manual
// final view is a deck of cards
let mmData = [];
mmData.push({
	"name": "Apocalyptor, Devourer of Realms",
	"meta": "Gargantuan celestial dragon, chaotic neutral",
	"Armor Class": 25,
	"Hit Points": 675,
	"Speed": "60 ft., fly 150 ft., burrow 60 ft.",
	"STR": 30,
	"DEX": 15,
	"CON": 29,
	"INT": 25,
	"WIS": 22,
	"CHA": 28,
	"Saving Throws": {
		"STR": "+17",
		"DEX": "+10",
		"CON": "+16",
		"INT": "+14",
		"WIS": "+13",
		"CHA": "+16"
	},
	"Skills": {
		"Perception": "+18",
		"Arcana": "+14",
		"History": "+14",
		"Insight": "+13",
		"Intimidation": "+16"
	},
	"Damage Resistances": "Cold, Thunder, Radiant",
	"Damage Immunities": "Necrotic, Poison, Psychic",
	"Condition Immunities": "Charmed, Frightened, Poisoned, Stunned",
	"Senses": "Truesight 120 ft., Darkvision 300 ft., Passive Perception 28",
	"Languages": "Draconic, Celestial, Abyssal, telepathy 300 ft.",
	"Challenge": "30 (155,000 XP)",
	"Traits": {
		"Legendary Resistance (3/Day)": "If Apocalyptor fails a saving throw, it can choose to succeed instead.",
		"Reality Shatter Aura": "Creatures within 60 feet of Apocalyptor must succeed on a DC 26 Wisdom saving throw or become stunned as they glimpse the unraveling fabric of existence.",
		"Eclipse Wing": "Whenever Apocalyptor flies, creatures in a 300-ft. radius are heavily obscured as the sky darkens unnaturally."
	},
	"Actions": {
		"Multiattack": "Apocalyptor makes three attacks: one with its bite, one with its claws, and one with its tail.",
		"Bite": {
			"Melee Weapon Attack": "+17 to hit, reach 15 ft., one target.",
			"Hit": "46 (6d10 + 10) piercing damage plus 24 (4d8) necrotic damage."
		},
		"Claws": {
			"Melee Weapon Attack": "+17 to hit, reach 10 ft., one target.",
			"Hit": "40 (6d8 + 10) slashing damage."
		},
		"Tail": {
			"Melee Weapon Attack": "+17 to hit, reach 20 ft., one target.",
			"Hit": "42 (6d8 + 10) bludgeoning damage."
		},
		"Reality Devouring Breath (Recharge 5-6)": {
			"Description": "Apocalyptor exhales a 120-ft. cone of destructive force. Each creature in the area must make a DC 26 Dexterity saving throw, taking 112 (16d12) force damage on a failed save, or half as much on a success."
		}
	},
	"Legendary Actions": {
		"Arcane Collapse": "Apocalyptor unleashes a blast of raw magic energy. Creatures within 30 ft. must make a DC 26 Intelligence save or take 50 (10d10) psychic damage.",
		"Void Step": "Apocalyptor teleports up to 120 ft. to an unoccupied space it can see."
	}
});
mmData.push({
	"name": "Deepclaw Crab",
	"meta": "Medium beast, unaligned",
	"Armor Class": 12,
	"Hit Points": 9,
	"Speed": "20 ft., swim 30 ft.",
	"STR": 12,
	"DEX": 14,
	"CON": 11,
	"INT": 2,
	"WIS": 10,
	"CHA": 4,
	"Skills": {
		"Stealth": "+4",
		"Perception": "+2"
	},
	"Senses": "Darkvision 60 ft., Passive Perception 12",
	"Languages": "—",
	"Challenge": "1/8 (25 XP)",
	"Traits": {
		"Amphibious": "The Deepclaw Crab can breathe air and water.",
		"Camouflage": "While motionless in rocky or coral-filled terrain, the Deepclaw Crab has advantage on Dexterity (Stealth) checks."
	},
	"Actions": {
		"Claw": {
			"Melee Weapon Attack": "+4 to hit, reach 5 ft., one target.",
			"Hit": "5 (1d6 + 2) bludgeoning damage. If the target is Medium or smaller, it is **grappled** (escape DC 12). The crab has two claws but can only grapple one creature at a time."
		}
	}
});

mmData.push({
	"name": "Goblin Scrapper",
	"meta": "Small humanoid (goblinoid), chaotic neutral",
	"Armor Class": "13 (Scrap Armor)",
	"Hit Points": 11,
	"Speed": "30 ft.",
	"STR": 10,
	"DEX": 14,
	"CON": 12,
	"INT": 10,
	"WIS": 8,
	"CHA": 10,
	"Skills": {
		"Stealth": "+4",
		"Perception": "+2",
		"Sleight of Hand": "+4"
	},
	"Senses": "Darkvision 60 ft., Passive Perception 12",
	"Languages": "Common, Goblin",
	"Challenge": "1/4 (50 XP)",
	"Traits": {
		"Nimble Escape": "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
		"Scrap Scavenger": "The goblin can use an action to rummage for makeshift weapons or tools, gaining advantage on an ability check related to improvisation."
	},
	"Actions": {
		"Scimitar": {
			"Melee Weapon Attack": "+4 to hit, reach 5 ft., one target.",
			"Hit": "5 (1d6 + 2) slashing damage."
		},
		"Junk Throw": {
			"Ranged Weapon Attack": "+4 to hit, range 20/60 ft., one target.",
			"Hit": "4 (1d4 + 2) bludgeoning damage. On a hit, the target must succeed on a DC 12 Dexterity saving throw or be blinded until the start of its next turn."
		}
	}
});

Session.set('monsterDeck', mmData);