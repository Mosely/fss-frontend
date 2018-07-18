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
      this.set("gender", value);
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
        "gender",
        "dateOfBirth",
        "age"
      );

      personProps.gender = store.findRecord("gender", personProps.gender).then((gender)=> {
        return gender;
      });
      console.table(personProps);

      userProps = this.getProperties("username", "email", "password");
      // let newPerson = store.createRecord("person", {
      //   firstName: this.get("firstName"),
      //   middleName: this.get("middleName"),
      //   lastName: this.get("lastName"),
      //   gender_id: this.get("user.gender"),
      //   dateOfBirth: this.get("dateOfBirth"),
      //   age: this.get("age")
      //  });
      newPerson = store.createRecord("person", personProps);
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
