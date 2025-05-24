Template.monsterActions.helpers({
	actions() {
		const myActions = Template.currentData()["Actions"];
		if (!myActions) return [];

		return Object.entries(myActions).map(([key, value]) => {
			// Convert objects to readable strings
			if (typeof value === "object") {
				return {
					key,
					value: Object.entries(value)
						.map(([subKey, subValue]) => `${subKey}: ${subValue}`)
						.join("; ") // Formats multi-line objects into a single string
				};
			}
			return { key, value }; // Already a string, just return as is
		});
	}
});
