import Component from '@ember/component';
import Ember from "ember";
import config from "../config/environment";

const {
  inject: { service },
} = Ember;

export default Component.extend({
	// injecting session service
  store: service("store"),
	endpoint: `${config.host}`,

	willRender() {
    Ember.$.getJSON(`${this.endpoint}/users`).then(data => {
      this.set('users', data);
			this.get('store').queryRecord('user', {}).then((user) => {
				let username = user.get('username');
				console.log("Hello " + username);
			});
    });
  },
});
