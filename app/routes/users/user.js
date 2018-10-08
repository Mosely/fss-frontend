import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
  model(params) {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("user") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
      return store
        .findRecord("user", params.id, { reload: true })
        .then(function(user) {
          store
            .findRecord("person", user.id, { reload: true })
            .then(function(person) {
              user.set("person", person);
              store
                .findRecord("gender", person.get("genderId"), { reload: true })
                .then(function(gender) {
                  person.set("gender", gender);
                });
            });
          return user;
        });
    }
  }
});
