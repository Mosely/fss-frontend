import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session: service("session"),
	store: service("store"),

	tagName: "div",
  classNames: ["form-check"],
	idValue: null,
	checked: false,
	values: [],

	actions: {
		// updateValue(value) {
		// 	let store = this.get("store");
		// 	store.findRecord("counselingtopic", this.get("checked")).then(model => {
    //     this.set("counselingtopic", model);
		// 		console.log(model.id);
		// 		console.log(this.get("counselingtopic"));
    //   });
		// }
	}
});
