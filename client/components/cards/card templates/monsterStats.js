function getAbilityModifier(score) {
	return Math.floor((score - 10) / 2);
}

let getModifier = function (score) {
	const result = getAbilityModifier(score);
	return result <= 0 ? '0' : `+${result}`;
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
	console.log("Monster stats template created");
	Template.instance.data = Template.instance.data || {
		type: "Humanoid",
		subtype: "Foulspawn",
		str: 13,
		dex: 15,
		con: 12,
		int: 10,
		wis: 8,
		cha: 8,
		ac: 15,
		hp: 32,
		senses: {
			darkVision: 60,
			tremorSense: 0,
			blindSight: 0,
			trueSight: 0
		},
		speed: {
			walk: 30,
			fly: 0,
			swim: 0,
			climb: 0,
			burrow: 0,
			hover: 0,
			teleport: 0
		},
		cr: "1/2",
	};
	const stats = Template.instance.data;
	console.log("Monster stats data: %o", stats);
});

Template.monsterStats.helpers({
	// Senses
	darkVision() {
		return Template.instance.data?.senses?.darkVision;
	},
	tremorSense() {
		return Template.instance.data?.senses?.tremorSense;
	},
	blindSight() {
		return Template.instance.data?.senses?.blindSight;
	},
	trueSight() {
		return Template.instance.data?.senses?.trueSight;
	},
	keenSenses() {
		return Template.instance.data?.senses?.keenSenses;
	},
	// Speed
	speedWalk() {
		return Template.instance.data?.speed?.walk;
	},
	speedFly() {
		return Template.instance.data?.speed?.fly;
	},
	speedSwim() {
		return Template.instance.data?.speed?.swim;
	},
	speedClimb() {
		return Template.instance.data?.speed?.climb;
	},
	speedBurrow() {
		return Template.instance.data?.speed?.burrow;
	},
	speedHover() {
		return Template.instance.data?.speed?.hover;
	},
	speedTeleport() {
		return Template.instance.data?.speed?.teleport;
	},
	// Ability Scores
	str() {
		return Template.instance.data.str;
	},
	strMod() {
		return getModifier(Template.instance.data.str);
	},
	dex() {
		return Template.instance.data.dex;
	},
	dexMod() {
		return getModifier(Template.instance.data.dex);
	},
	con() {
		return Template.instance.data.con;
	},
	conMod() {
		return getModifier(Template.instance.data.con);
	},
	int() {
		return Template.instance.data.int;
	},
	intMod() {
		return getModifier(Template.instance.data.int);
	},
	wis() {
		return Template.instance.data.wis;
	},
	wisMod() {
		return getModifier(Template.instance.data.wis);
	},
	cha() {
		return Template.instance.data.cha;
	},
	chaMod() {
		return getModifier(Template.instance.data.cha);
	},
	// Stats
	ac() {
		return Template.instance.data.ac;
	},
	hp() {
		return Template.instance.data.hp;
	},
	speed() {
		return Template.instance.data.speed;
	},
	cr() {
		return Template.instance.data.cr;
	},
	xp() {
		return getXPForCR(Template.instance.data.cr);
	},
	type() {
		return Template.instance.data.type;
	},
	subType() {
		return Template.instance.data.subtype;
	}
});
