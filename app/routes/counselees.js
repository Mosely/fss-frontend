import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = this.store;
    return store.findAll("counselee").then(function(counselees) {
      // Modify the following to pull in any related models as needed
      counselees.forEach(counselee => {
        store.findRecord("client", counselee.id).then(function(client) {
          counselee.set("client", client);
        });
        store.findRecord("person", counselee.id).then(function(person) {
          counselee.set("person", person);
        });
      });
      return counselees;
    });
  }
});
