import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("veteran") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
       return true
    }
    return this.store.findRecord("veteran", params.id).then(function(veteran) {
      store.findRecord("client", veteran.id).then(function(client) {
        veteran.set("client", client);
      });
      store.findRecord("person", veteran.id).then(function(person) {
        veteran.set("person", person);
      });
    });
  }
});
