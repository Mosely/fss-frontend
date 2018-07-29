import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session: service("session"),
  store: service("store"),

	actions: {
		/**
		 * Will set gender_id to the selected value when the dropdown is updated
		 *
		 * @param {string} value The value of the option that is selected
		 **/
		updateValue(value) {
			let target = event.target.classList, store = this.store;
			let counselingtopic, ethnicity;

			if (target.contains("counselingTopic")) {
				store.find("counselingtopic", value).then((model) => {
					this.set("counselingtopic", model);
				});
			} else if (target.contains("ethnicity")) {
				store.find("ethnicity", value).then((model) => {
					this.set("ethnicity", model);
				});
			}
		},
	}
});
