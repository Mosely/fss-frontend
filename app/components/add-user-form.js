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
        genderModel,
        store = this.get("store");

      personProps = this.getProperties(
        "firstName",
        "middleName",
        "lastName",
        "gender",
        "dateOfBirth",
        "age"
      );

      genderModel = store.findRecord("gender", personProps.gender).then((gender) => {
        return gender;
      });
      personProps.gender = genderModel;

      newPerson = store.createRecord("person", personProps);

      userProps = this.getProperties("username", "email", "password");
      newUser = store.createRecord("user", {
        id: newPerson.id,
        userProps
      });

      //newPerson.set("gender", genderModel);

      newPerson.save().then(() => {
        return newUser.save();
      });

      // let resolvedPromises = Promise.all([genderModel, newPerson, newUser]).then((values)=> {
      //   return values;
      // });
      // newPerson.set("gender", resolvedPromises);
      // console.log(resolvedPromises);
    }
  }
});
