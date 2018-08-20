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
 			let props, store = this.get("store");
			console.log(value);
 			// store.find("counselingtopic", value).then(model => {
      //    this.set("counselingtopic", model);
 			// 	console.log(model.id);
 			// 	console.log(this.get("counselingtopic"));
      //  });
 		},

		triggerSave() {
			console.log(this.getProperties("firstName"));
			console.log(this.getProperties('selectedCities'));
			console.log(this.getProperties('selectedStates'));
		}
	}
});
