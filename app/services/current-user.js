import Service from '@ember/service';
import Ember from "ember";
import { inject as service } from '@ember/service';

const {
  RSVP,
} = Ember;

export default Service.extend({
	session: service('session'),

	loadUser() {
		if (this.get('session.isAuthenticated')) {
      let id = this.get('session.data.currentUser.id');
      console.log("The currentUSer.id: " + id);
      //return this.store.findRecord('user', {id: true}).then((user) => {
      return this.store.findRecord('user', id).then((user) => {
        this.set("user", user);
      });
    } else {
      return RSVP.resolve();
    }
	}
});
