let factionName = "";
Template.faction.onCreated(function () {
	Template.currentData()["name"] = Template.currentData()["name"] || "name string";
	// Template.currentData()["factionName"] = Template.currentData()["name"];
	// this.factionName = Template.currentData()["name"];
	factionName = Template.currentData()["name"];
})

Template.faction.helpers({
	creatures() {
		const monsterManual = Session.get('monsterDeck') || [];
		return monsterManual.filter((creature) => {
			// if no faction, skip
			if (!creature.faction) return false;
			return creature.faction === Template.currentData()["name"]
		});
	},
	pathForToken(index) {
		const tokenNumber = index + 1;
		const path = `/art/${factionName}/token_${tokenNumber}.png`;
		console.log(path);
		return path;
	}
});