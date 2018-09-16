import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("shelter_client") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("Not Authorized");
      });
      return false;
    } else {
      console.log("Authorized to see this.");
    }
    return store.findAll("shelterclient").then(function(primaryModels) {
      // Modify the following to pull in any related models as needed
      primaryModels.forEach(primaryModel => {
        store
          .findRecord("client", primaryModel.id)
          .then(function(secondaryModel) {
            primaryModel.set("client", secondaryModel);
          });
        store
          .findRecord("person", primaryModel.id)
          .then(function(secondaryModel) {
            primaryModel.set("person", secondaryModel);
          });
      });
      return primaryModels;
    });
  }
});
