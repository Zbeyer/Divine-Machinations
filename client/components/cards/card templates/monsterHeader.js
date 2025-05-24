Template.monsterHeader.onCreated(function () {
	Template.instance.data = Template.instance.data || {
		name: 'Goblin Scrapper',
	}
});
Template.monsterHeader.helpers({
	name() {
		const cardName = Template.instance.data.name;
		console.log('name %o', cardName);
		return cardName;
	}
});