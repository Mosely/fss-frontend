import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
  model(params) {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("person") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
      return store
        .findRecord("person", params.id, { reload: true })
        .then(person => {
          // store.findRecord("gender", person.genderId).then((gender) => {
          //   person.set("gender", gender);
          // });
          return person;
        });
    }
  }
});
