import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("veteran") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard");
      alert("Not Authorized");
      return false;
    } else {
      console.log("Authorized to see this.");
    }
    return this.store.findRecord("shelterclientidentitypreference", params.id);
  }
});
