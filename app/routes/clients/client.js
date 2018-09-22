import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    return this.store.findRecord("client", params.id).then(function(client) {
      store.findRecord("clientethnicity", client.id).then(function(ethnicity) {
        client.set("clientEthnicities", ethnicity);
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
