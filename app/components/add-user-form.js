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
        store = this.get("store");

      // personProps = this.getProperties(
      //   "firstName",
      //   "middleName",
      //   "lastName",
      //   "user.gender",
      //   "dateOfBirth",
      //   "age"
      // );
      userProps = this.getProperties("username", "email", "password");

      let newPerson = store.createRecord("person", {
        firstName: this.get("firstName"),
        middleName: this.get("middleName"),
        lastName: this.get("lastName"),
        gender_id: this.get("user.gender"),
        dateOfBirth: this.get("dateOfBirth"),
        age: this.get("age")
       });
      let newUser = store.createRecord("user", { id: newPerson.id, userProps });
      newPerson.save().then(() => {
        return newUser.save();
      });

      // return newPerson.save().then(() => {
      // 	newUser.save();
      // });

      // let userInfo = this.getProperties('firstName', 'lastName', 'username', 'email', 'password');
      // let newPerson = this.store
      //   .createRecord("person", personProps)
      //   .then(person => {
      //     this.store.createRecord("user", { id: person.id, userProps });
      //   });
      // return newUser.save();
      // return store.createRecord("person", personProps).then(person => {
      //   store.findRecord("user", person.id).then(user => {
      //     let userData = store.createRecord("user", userProps);
      //     person.set("user", userData);
      //   });
      //   return person.save();
      // });
    }
  }
});
