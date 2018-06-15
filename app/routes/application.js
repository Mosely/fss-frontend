import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
	session: service('session'),
  currentUser: service('current-user'),

  // beforeModel() {
  //   return this._loadUser();
  // },

  sessionAuthenticated() {
    this._loadUser().then(()=>{
      this.transitionTo('/');
    }).catch(() => this.session.invalidate());
  },

  _loadUser() {
    return this.get('currentUser').loadUser();
  }
});
