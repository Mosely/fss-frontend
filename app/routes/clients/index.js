import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = this.store;
    return store.findAll("client", { reload: true }).then(function(clients) {
      // Modify the following to pull in any related models as needed
      clients.forEach(client => {
        store
          .findRecord("person", client.id, { reload: true })
          .then(function(person) {
            store
              .findRecord("gender", person.get("genderId"), { reload: true })
              .then(function(gender) {
                person.set("gender", gender);
              });
            client.set("person", person);
          });
      });
      return clients;
    });
  }
});
