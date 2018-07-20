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
			let target = event.target.classList;
			if (target.contains("counselingTopic")) {
				let counselingtopic = this.set("topic", value);
			} else if (target.contains("ethnicity")) {
				let ethnicity = this.set("ethnicity", value);
			}
		},
	}
});
