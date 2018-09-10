import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service("session"),
  router: service(),
  store: service("store"),

  actions: {
    updateValue(value) {
      //NOTE: we'll probably follow this pattern for finding related models whenever we need to
      // perform record inserts.
      let store = this.get("store");
      console.log(value);
      store.find("gender", value).then(model => {
        this.set("user.person.gender", model);
      });
    },
    update() {
      let updatedClient;

      updatedClient = this.get("client.person");

      updatedClient.setProperties({
        firstName: this.get("client.person.firstName"),
        middleName: this.get("client.person.middleName"),
        lastName: this.get("client.person.lastName"),
        dateOfBirth: this.get("client.person.dateOfBirth"),
        gender: this.get("client.person.gender")
      });
      updatedClient.set("age", null);

      // saving person rtecord then saving user record.
      // TODO: Save records after all changes have been made
    }
  }
});
