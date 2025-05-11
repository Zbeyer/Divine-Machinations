import {Template} from 'meteor/templating';
let printDataAsJSON = function (dataObj: any): string | undefined {
	if (!dataObj) return;
	console.log('Printing Debug: %o', dataObj);
	return JSON.stringify(dataObj, null, "\t"); // stringify with tabs inserted at each level
};

Template.printJSON.helpers({
	printJSON: function (dataObj: any): string | undefined {
		const obj = dataObj || Template.instance().data || ""; // Template.instance().obj.get();
		if (!obj) return;
		return printDataAsJSON(obj);
	}
});