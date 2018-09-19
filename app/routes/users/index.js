import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = this.store;
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
