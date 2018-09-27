import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service("session"),

  actions: {
    // filterByName(param) {
    // 	let store = this.get('store');
    // 	if (param !== '') {
    // 		return store.query("person", {fullName: param}).then((results) => {
    // 			return { query: param, results: results };
    // 		});
    // 	} else {
    // 		// return store.query("person", {fullName: param}).then((results) => {
    // 		// 	return { query: param, results: results };
    // 		// });
    // 	}
    // }
  }
});
