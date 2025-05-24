Template.monsterTraits.helpers({
	traits() {
		return Object.entries(Template.currentData()["Traits"]).map(([key, value]) => ({ key, value }));
	}
});