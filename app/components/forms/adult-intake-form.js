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
		updateTopics(value) {
			let store = this.get("store");
			// store.find("counselingtopic", value).then((model) => {
			// 	this.set("counselingtopic", model);
			// });
			console.log(value);

 		},
		triggerSave() {
			console.log(this.get("ethnicity"));
			console.log(this.getProperties('selectedStates'));
		}
	}
});
