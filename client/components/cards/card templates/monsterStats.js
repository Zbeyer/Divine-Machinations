function getAbilityModifier(score) {
	return Math.floor((score - 10) / 2);
}

let getModifier = function (score) {
	const result = getAbilityModifier(score);
	if (!result) return '';
	if (result < 0) return `(${result})`;
	return result <= 0 ? '0' : `(+${result})`;
};

const getXPForCR = (cr) => {
	const xpTable = {
		"0": 10, "1/8": 25, "1/4": 50, "1/2": 100,
		"1": 200, "2": 450, "3": 700, "4": 1100,
		"5": 1800, "6": 2300, "7": 2900, "8": 3900,
		"9": 5000, "10": 5900, "11": 7200, "12": 8400,
		"13": 10000, "14": 11500, "15": 13000, "16": 15000,
		"17": 18000, "18": 20000, "19": 22000, "20": 25000,
		"21": 33000, "22": 41000, "23": 50000, "24": 62000,
		"25": 75000, "26": 90000, "27": 105000, "28": 120000,
		"29": 135000, "30": 155000
	};

	return xpTable[cr] || "Invalid CR"; // Returns XP or error message
};
Template.monsterStats.onCreated(function () {
	// const instance = this;
	// const data = Template.currentData();
	// console.log("Card dat`a: %o", data);
});

Template.monsterStats.helpers({
	// Core
	ac() {
		return Template.currentData()["Armor Class"];
	},
	hp() {
		return Template.currentData()["Hit Points"];
	},
	speed() {
		return Template.currentData()["Speed"];
	},
	cr() {
		return Template.currentData()["Challenge"];
	},

	// Ability Scores
	str() {
		return Template.currentData().STR;
	},
	strMod() {
		return getModifier(Template.currentData().STR);
	},
	dex() {
		return Template.currentData().DEX;
	},
	dexMod() {
		return getModifier(Template.currentData().DEX);
	},
	con() {
		return Template.currentData().CON;
	},
	conMod() {
		return getModifier(Template.currentData().CON);
	},
	int() {
		return Template.currentData().INT;
	},
	intMod() {
		return getModifier(Template.currentData().INT);
	},
	wis() {
		return Template.currentData().WIS;
	},
	wisMod() {
		return getModifier(Template.currentData().WIS);
	},
	cha() {
		return Template.currentData().CHA;
	},
	chaMod() {
		return getModifier(Template.currentData().CHA);
	},
	// Saving Throws
	strST() {
		return Template.currentData()["STR Save"];
	},
	dexST() {
		return Template.currentData()["DEX Save"];
	},
	conST() {
		return Template.currentData()["CON Save"];
	},
	intST() {
		return Template.currentData()["INT Save"];
	},
	wisST() {
		return Template.currentData()["WIS Save"];
	},
	chaST() {
		return Template.currentData()["CHA Save"];
	},
	// Saves
	saves() {
		const saves = Template.currentData()["Saving Throws"];
		return saves ? Object.entries(saves).map(([key, value]) => ({key, value})) : [];
	},
	// Skills
	skills() {
		return Object.entries(Template.currentData()["Skills"])?.map(([key, value]) => ({key, value}));
	},
	// Damage Vulnerabilities
	damageVulnerabilities() {
		return Template.currentData()["Damage Vulnerabilities"];
	},
	// Damage Resistances
	damageResistances() {
		return Template.currentData()["Damage Resistances"];
	},
	// Damage Immunities
	damageImmunities() {
		return Template.currentData()["Damage Immunities"];
	},
	// Condition Immunities
	conditionImmunities() {
		return Template.currentData()["Condition Immunities"];
	},
	// Senses
	senses() {
		return Template.currentData()["Senses"];
	},
	// Languages
	languages() {
		return Template.currentData()["Languages"];
	},

});
