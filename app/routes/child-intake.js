import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),

	model() {
		let store = this.store;
		return RSVP.hash({
			cities: store.findAll('citydata'),
			counties: store.findAll('countydata'),
			drugUse: store.findAll('druguse'),
			ethnicities: store.findAll('ethnicity'),
			genders: store.findAll('gender'),
			languages: store.findAll('language'),
			medications: store.findAll('medication'),
			states: store.findAll('statedata'),
			schools: store.findAll('school'),
			topics: store.findAll('counselingtopic'),
		});
	}
});
