import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {

	model() {
		let scopes = this.get('session.data.authenticated.scope');
		if (scopes) {
			console.table(scopes);
		}
	}
	// afterModel() {
	// 	return this.transitionTo('login');
	// },

});
