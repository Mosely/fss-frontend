import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),

	model(){
		let store = this.store;
		return RSVP.hash({
			cities: store.findAll('citydata'),
			counties: store.findAll('countydata'),
			ethnicities: store.findAll('ethnicity'),
			fundingSources: store.findAll('fundingsource'),
			genders: store.findAll('gender'),
			identies: store.findAll('identitypreference'),
			languages: store.findAll('language'),
			states: store.findAll('statedata'),
			people: store.findAll('person'),
		});
	}
});
