import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("user") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
       return true
    }
    return store.findAll("user", { reload: true }).then(function(users) {
      users.forEach(user => {
        store
          .findRecord("person", user.id, { reload: true })
          .then(function(person) {
            Object.keys(person.toJSON()).forEach(function(prop) {
              console.log(prop + " " + person.get(prop));
            });
            store
              .findRecord("gender", person.get("genderId"), { reload: true })
              .then(function(gender) {
                person.set("gender", gender);
              });
            user.set("person", person);
          });
      });
      return users;
    });
  }
});
