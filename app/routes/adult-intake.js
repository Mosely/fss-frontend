import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),

	model: function(){
    return RSVP.hash({
			cities: this.store.findAll('citydata'),
			ethnicities: this.store.findAll('ethnicity'),
			languages: this.store.findAll('language'),
			medications: this.store.findAll('medication'),
			states: this.store.findAll('statedata'),
			topics: this.store.findAll('counselingtopic'),
    });
  }
});
