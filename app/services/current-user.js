import Service from '@ember/service';
import Ember from "ember";
import { inject as service } from '@ember/service';

const {
  RSVP: { Promise },
} = Ember;

export default Service.extend({
	session: service('session'),

	loadUser() {
		if (this.get('session.isAuthenticated')) {
      return this.store.queryRecord('user', {id: true}).then((user) => {
        this.set("user", user);
      });
    } else {
      return RSVP.resolve();
    }
	}
});
