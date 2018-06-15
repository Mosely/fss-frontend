import Service from '@ember/service';
import Ember from "ember";
import { inject as service } from '@ember/service';

const {
  RSVP: { Promise },
} = Ember;

export default Service.extend({
	session: service('session'),

	loadUser() {
		return Promise((resolve, reject) => {
			const token = this.session.data.authenticated.access_token;

			if (!isEmpty(token)) {
				return this.store.findRecord('user', {}).then((user) => {
					this.session.set("user", user);
					resolve();
					debugger;
				}, reject);
			} else {
				resolve();
			}
		});
	}
});
