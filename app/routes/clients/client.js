import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("client") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("You Are Not Authorized");
      });
      return false;
    } else {
      console.log("Authorized to see this.");
    }
    return store.findRecord("client", params.id).then(function(client) {
      store
        .query("clientethnicity", { client_id: client.id })
        .then(function(clientethnicity) {
          clientethnicity.forEach(function(ethnicity) {
            store
              .findRecord("ethnicity", ethnicity.get("ethnicityId"))
              .then(function(ethnicity) {
                client.set("clientethnicity", ethnicity);
              });
          });
        });
      store.findRecord("person", client.id).then(function(person) {
        client.set("person", person);
        store
          .findRecord("gender", person.get("genderId"), { reload: true })
          .then(function(gender) {
            person.set("gender", gender);
          });
      });
      return client;
    });
  }
});
