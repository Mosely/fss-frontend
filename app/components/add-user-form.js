import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service("session"),
  store: service("store"),

  actions: {
    updateValue(value) {
      this.set("user.gender", value);
    },
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
        "dateOfBirth",
        "age"
      );
      userProps = this.getProperties("username", "email", "password");
      // let newPerson = store.createRecord("person", {
      //   firstName: this.get("firstName"),
      //   middleName: this.get("middleName"),
      //   lastName: this.get("lastName"),
      //   gender_id: this.get("user.gender"),
      //   dateOfBirth: this.get("dateOfBirth"),
      //   age: this.get("age")
      //  });
      newPerson = store.createRecord("person", {
        gender_id: this.get('user.gender'),
        personProps
      });
      newUser = store.createRecord("user", {
        id: newPerson.id,
        userProps
      });
      newPerson.save().then(() => {
        return newUser.save();
      });
    }
  }
});
