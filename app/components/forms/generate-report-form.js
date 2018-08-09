import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session: service("session"),

	actions: {
		updateValue(value) {
			console.log(value);
			this.set("rtype", value)
		},

		generateReport() {
			let props, store = this.get("store");
			props = this.get('rtype');
			console.log("Props" + props);
		}
	}
});
