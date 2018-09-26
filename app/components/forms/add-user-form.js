import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service("session"),
  router: service(),
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
        userPassword,
        newUser,
        store = this.get("store");

      personProps = this.getProperties(
        "firstName",
        "middleName",
        "lastName",
        "dateOfBirth"
      );
      let pwInput = document.querySelectorAll(".password");
      if (this.get("password") != this.get("passwordConfirm")) {
        for (let i = 0; i < pwInput.length; i++) {
          pwInput[i].classList.add("invalid");
        }
        console.log("Not Matching");
      } else {
        for (let i = 0; i < pwInput.length; i++) {
          if (pwInput[i].classList.contains("invalid")) {
            pwInput[i].classList.remove("invalid");
          }
        }
        console.log("Matching");
        newPerson = store.createRecord("person", personProps);
        newPerson.set("gender", this.get("gender"));

        userProps = this.getProperties("username", "email", "password");

        newPerson.save().then(() => {
          let pid = parseInt(newPerson.get("id"));
          newUser = store.createRecord("user", userProps);
          newUser.set("id", pid);
          return newUser.save().then(() => {
            this.get("router").transitionTo("users");
          });
        });
      }
    }
  }
});
