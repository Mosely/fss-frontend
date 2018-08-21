import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session: service("session"),
	router: service(),
  store: service("store"),

	actions: {
	 updateEthnicity(value) {
 			let store = this.get("store");
			store.find("ethnicity", value).then((model) => {
				this.set("ethnicity", model);
			});
		},
		updateTopics(newSelection, value, operation) {
			let store = this.get("store");
			// store.find("counselingtopic", value).then((model) => {
			// 	this.set("counselingtopic", model);
			// });
			this.set("selection", newSelection);
			console.log(this.get("selectedTopics"));

 		},
		triggerSave() {
			console.log(this.get("ethnicity"));
			console.log(this.getProperties('selectedStates'));
			console.log(this.getProperties('selectedTopics'));
		}
	}
});
