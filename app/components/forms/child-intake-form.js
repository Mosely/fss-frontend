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
		updateTopics(newSelection) {
			let topics, store = this.get("store");
			this.set("selectedTopics", newSelection);
			topics = this.get("selectedTopics");
			this.set("counselingtopic", topics);
		},
	}
});
