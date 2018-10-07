import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("counselee") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
       return true
    }
    return this.store
      .findRecord("counselee", params.id)
      .then(function(counselee) {
        store.findRecord("client", counselee.id).then(function(client) {
          counselee.set("client", client);
        });
        store.findRecord("person", counselee.id).then(function(person) {
          counselee.set("person", person);
        });
      });
  }
});
