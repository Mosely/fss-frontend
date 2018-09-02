import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),

	model(){
		let store = this.store;
		let scopes = this.get('session.data.authenticated.scope');
    if( scopes.indexOf('veteran') < 0 ) {
			// transition to dashboard and display unauthorizedmessage
      this.transitionTo('dashboard');
			alert('Not Authorized');
			return false;
    } else {
      console.log('Authorized to see this.');
    }
    return RSVP.hash({
			branchofservices: store.findAll('branchofservice'),
			ethnicities: store.findAll('ethnicity'),
			// discharges: store.findAll('militarydischargetype'),
      genders: store.findAll('gender')
    });
  }
});
