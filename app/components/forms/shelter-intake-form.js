import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session: service("session"),
  store: service("store"),

	actions: {
		updateEthnicity(value) {
			let store = this.get("store");
			store.find("ethnicity", value).then((model) => {
				this.set("ethnicity", model);
			});
		},
		updateIdenties(newSelection, value) {
			let identies, store = this.get("store");
			this.set("selectedIdenties", newSelection);
			identies = this.get("selectedIdenties");
			this.set("identitypreference", identies);
		},
		updateFundingSources(newSelection, value) {
			let fundingSources, store = this.get("store");
			this.set("selectedFundingSources", newSelection);
			fundingSources = this.get("selectedFundingSources");
			this.set("fundingsource", fundingSources);
		},
		triggerSave() {
			// console.log(this.get("selectedIdenties"));
			// console.log(this.get("fundingSources"));
			// this.get("selectedTopics").forEach((topic) => {
			// 	console.log(topic.id);
			// });
		}
	}
});
