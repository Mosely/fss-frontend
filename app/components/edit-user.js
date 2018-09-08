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
      let updatedPerson, updatedUser;

      updatedPerson = this.get("user.person");
      updatedUser = this.get("user");

      updatedPerson.setProperties({
        firstName: this.get("user.person.firstName"),
        middleName: this.get("user.person.middleName"),
        lastName: this.get("user.person.lastName"),
        dateOfBirth: this.get("user.person.dateOfBirth"),
        gender: this.get("user.person.gender")
      });
      updatedPerson.set("age", null);

      updatedUser.setProperties({
        username: this.get("user.username"),
        email: this.get("user.email")
      });

      // saving person rtecord then saving user record.
      updatedPerson.save().then(() => {
        updatedUser.save().then(() => {
          this.get("router").transitionTo("users");
        });
      });
    },
    cancle() {
      let updatedPerson, updatedUser, updatedGender;
      updatedPerson = this.get("user.person");
      updatedUser = this.get("user");
      updatedGender = this.get("user.person.gender");
      updatedGender.rollbackAttributes();
      updatedPerson.rollbackAttributes();
      updatedUser.rollbackAttributes();
    },
    deleteUser() {
      let updatedUser;
      updatedPerson = this.get("user.person", this.get("user.person.id"), {
        backgroundReload: false
      });
      updatedUser = this.get("user", this.get("user.id"), {
        backgroundReload: false
      });
      updatedUser.destroyRecord().then(() => {
        //updatedPerson.destroyRecord();
        //TODO: Consider thsi use-case - a user leaves FSS, so user account is deleted, but this person
        // could be a client of FSS in the future.  Do we delete the peron record as well or keep it?
        // I think we should preserve person records,  but this is open to discussion.
        this.get("router").transitionTo("users");
      });
    }
  }
});
