import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    return store
      .findRecord("client", params.id, { reload: true })
      .then(client => {
        store.findRecord("person", client.id, { reload: true }).then(person => {
          client.set("person", person);
          store
            .findRecord("gender", person.get("genderId"), { reload: true })
            .then(gender => {
              person.set("gender", gender);
            });
        });
        return client;
      });
  }
});