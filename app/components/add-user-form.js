import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service("session"),
  store: service("store"),

  actions: {
    /**
     * Will set gender_id to the selected value when the dropdown is updated
     *
     * @param {string} value The value of the option that is selected
     **/
    updateValue(value) {
      //NOTE: we'll probably follow this pattern for finding related models whenever we need to
      // perform record inserts.
      let store = this.get("store");
      store.find("gender", value).then(model => {
        this.set("gender", model);
      });
    },

    /**
     * Creates a record to save a new user
     *
     * @return the saved records of the person then user model.
     **/
    triggerSave() {
      let personProps,
        userProps,
        newPerson,
        newUser,
        store = this.get("store");

      personProps = this.getProperties(
        "firstName",
        "middleName",
        "lastName",
        "dateOfBirth"
      );
      newPerson = store.createRecord("person", personProps);
      newPerson.set("gender", this.get("gender"));
      userProps = this.getProperties("username", "email", "password");

      newPerson.save().then(() => {
        let pid = parseInt(newPerson.get("id"));
        newUser = store.createRecord("user", userProps);
        newUser.set("id", pid);
        return newUser.save();
      });
    }
  }
});
