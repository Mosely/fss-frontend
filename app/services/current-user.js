import Service from '@ember/service';
import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Service.extend({
	session: service('session'),

	loadCurrentUser() {
		// return new RSVP.Promise((resolve, reject) => {
		// 	const token = this.get('session.data.authenticated.token');
		//
		// 	if (!Ember.isEmpty(token)) {
		// 		let uid = this.get("session.data.authenticated.id")
		// 		return this.get('store').findRecord('user', uid).then((user) => {
		// 			session.set("user", user);
		// 			resolve();
		// 		}, reject);
		// 	} else {
		// 		resolve();
		// 	}
		// });
	}
});
