import Base from "ember-simple-auth/authorizers/base";
import Ember from "ember";

const {
  inject: { service }
} = Ember;
export default Base.extend({
  // injecting session service
  session: service("session"),

  authorize(data, block) {
    if (Ember.testing) {
      block("Authorization", "Bearer");
    }
    const { token } = data;
    if (this.get("session.isAuthenticated") && token) {
      block("Authorization", `Bearer ${token}`);
    }
  }
});
