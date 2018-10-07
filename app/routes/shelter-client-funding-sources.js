import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("shelter_client_funding_source") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
       return true
    }
    return store
      .findAll("shelterclientfundingsource")
      .then(function(primaryModels) {
        // Modify the following to pull in any related models as needed
        //primaryModels.forEach(primaryModel => {
        //  store.findRecord('REPLACEWITHRELATEDMODEL', primaryModel.id).then(function(secondaryModel) {
        //    primaryModel.set('REPLACEWITHRELATEDMODEL', secondaryModel);
        //  });
        //});
        return primaryModels;
      });
  }
});
