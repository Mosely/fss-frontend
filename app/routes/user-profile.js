import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),
	currentUser: service("current-user"),

	model() {
		let store = this.store, current_user = this.get('session.data.authenticated.current_user');
		console.log("currentUser " + current_user);
		return store.findRecord('user', current_user, { reload: true }).then(function(user) {
			user.set('currentUser', user);
		});
	}
});
