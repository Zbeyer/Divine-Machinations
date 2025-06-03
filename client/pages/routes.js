import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
// import { BlazeLayout } from 'meteor/pwix:blaze-layout';
import { BlazeLayout } from 'meteor/pwix:blaze-layout';

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('home', { main: 'home' });
		document.documentElement.lang = "en";
	}
});
