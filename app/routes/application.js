import Route from '@ember/routing/route';
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject: { service } } = Ember;
export default Route.extend(ApplicationRouteMixin, {
	currentUser: service('current-user'),

	// beforeModel() {
	// 	return this._loadCurrentUser();
	// },
	//
	// // sessionAuthenticated hook invoked once session is sucessfully authenticated
	// // This will call our private function and transtion to the root path.
	// sessionAuthenticated() {
	// 	this._loadCurrentUser().then(() => {
	// 		this.transitionTo('/');
	// 	}).catch(() => this.get('session').invalidate());
	// },
	//
	// // Private function calls the loadCurrentUSer function
	// _loadCurrentUser() {
	// 	return this.get('currentUser').loadCurrentUser;
	// }

});
