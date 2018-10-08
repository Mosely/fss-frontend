import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import RSVP from "rsvp";

export default Route.extend(AuthenticatedRouteMixin, {
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
        .then(user => {
          store.findRecord("person", user.id, { reload: true }).then(person => {
            user.set("person", person);
            Object.keys(person.toJSON()).forEach(function(prop) {
              console.log(prop + " " + person.get(prop));
            });
            store
              .findRecord("gender", person.get("genderId"), { reload: true })
              .then(function(gender) {
                person.set("gender", gender);
              });
          });
          return user;
        });
    }
  },
  afterModel(model) {
    let store = this.store;
    store.findAll("gender").then(function(gender) {
      model.set("gender", gender);
    });
  }
});
