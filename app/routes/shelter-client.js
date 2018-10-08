import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("shelter_client") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
      return this.store
        .findRecord("shelterclient", params.id)
        .then(function(shelterclient) {
          store.findRecord("client", shelterclient.id).then(function(client) {
            shelterclient.set("client", client);
          });
          store.findRecord("person", shelterclient.id).then(function(person) {
            shelterclient.set("person", person);
          });
        });
    }
  }
});
