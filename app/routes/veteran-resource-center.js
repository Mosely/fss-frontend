import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),

	model(){
		let store = this.store;
    return RSVP.hash({
			branchofservices: store.findAll('branchofservice'),
			ethnicities: store.findAll('ethnicity'),
      genders: store.findAll('gender'),
    });
  }
});
