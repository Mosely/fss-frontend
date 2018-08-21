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
		updateTopics(newSelection, value) {
			let topics, store = this.get("store");
			this.set("selectedTopics", newSelection);
			topics = this.get("selectedTopics");
			this.set("counselingtopic", topics);
		},
		updateDrugUse(newSelection, value) {
			let drugs, store = this.get("store");
			this.set("selectedDrugs", newSelection);
			drugs = this.get("selectedDrugs");
			this.set("druguse", drugs);
		},
		triggerSave() {
			console.log(this.get("selectedTopics"));
			console.log(this.get("selectedDrugs"));
			// this.get("selectedTopics").forEach((topic) => {
			// 	console.log(topic.id);
			// });
		}
	}
});
