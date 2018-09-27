import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
  session: service("session"),

  model() {
    let store = this.store,
      current_user = this.get("session.data.authenticated.current_user");
    return store
      .findRecord("user", current_user, { reload: true })
      .then(function(user) {
        store.findRecord("person", user.id).then(function(person) {
          store
            .findRecord("gender", person.get("genderId"))
            .then(function(gender) {
              person.set("gender", gender);
            });
          user.set("person", person);
        });
        return user;
      });
  }
});
