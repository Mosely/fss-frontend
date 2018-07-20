import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),

	model: function(){
		return RSVP.hash({
			ethnicities: this.store.findAll('ethnicity'),
			languages: this.store.findAll('language'),
			genders: this.store.findAll('gender'),
			counties: this.store.findAll('countydata'),
			states: this.store.findAll('statedata'),
		});
	}
});
