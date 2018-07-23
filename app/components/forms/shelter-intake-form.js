import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session: service("session"),
  store: service("store"),

	actions: {
		filterByName(param) {
			var store = this.get('store');
			var store = this.get('store');
			if (param !== '') {
				return store.query('citydata', { name: param }).then((results) => {
					return { query: param, results: results };
				});
			} else {
				return store.findAll('citydata').then((results) => {
					return { query: param, results: results };
				});
			}
		},
		selectValue(){
			console.log("Hello");
		}
	}
});
