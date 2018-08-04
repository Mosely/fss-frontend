import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),

  actions: {
    update() {
      let updatedPerson, updatedUser;

      updatedPerson = this.get("user.person");
      updatedUser = this.get("user");
      updatedPerson.setProperties({
        firstName: this.get("user.person.firstName"),
        middleName: this.get("user.person.middleName"),
        lastName: this.get("user.person.lastName"),
        dateOfBirth: this.get("user.person.dateOfBirth")
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
      let updatedPerson, updatedUser;
      updatedPerson = this.get("user.person");
      updatedUser = this.get("user");
      updatedPerson.rollbackAttributes();
      updatedUser.rollbackAttributes();
    },
    destroy() {
      let updatedPerson,
        updatedUser,
        store = this.store;
      updatedPerson = this.get("user.person", this.get("user.person.id"), {
        backgroundReload: false
      });
      updatedUser = this.get("user", this.get("user.id"), {
        backgroundReload: false
      });
      updatedPerson.destroyRecord().then(() => {
				updatedUser.destroyRecord();
			});
      // let person, user, store = this.store;
      // person = store("user.person", this.get("user.id"), { backgroundReload: false }).then((person) => {
      // 	person.destroyRecord();
      // });
      // user = this.get("user", this.get("user.id"), { backgroundReload: false }).then((user) => {
      // 	user.destroyRecord();
      // });
    }
  }
});
