Template.accordion.onCreated(function () {
	// Initialize the reactive variable
	this.state = new ReactiveVar(false);
});

Template.accordion.helpers({
	state() {
		return Template.instance().state.get();
	},
});

Template.accordion.events({
	"click .accordion-container"(event, template) {
		let isExpanded = template.state.get();
		template.state.set(!isExpanded);
	},
});
