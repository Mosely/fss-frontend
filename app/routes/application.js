import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
	session: service('session'),
  currentUser: service('current-user'),
	
	beforeModel(transition) {
		this._loadCurrentUser();
	},

	sessionAuthenticated() {
		this._super(...argutments);
		this._loadCurrentUser();
	},

	_loadCurrentUser() {
		return this.get('currentUser').loadUser().cath(() => this.get('session').invalidate());
	}

});
