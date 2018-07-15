import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  // injecting session service
  session: service("session"),

  actions: {
    addUser() {
      let store = this.store;
      let personProps = this.getProperties(
        "firstName",
        "middleName",
        "lastName",
        "dateOfBirth",
        "age"
      );
      let userProps = this.getProperties("username", "email", "password");
      // let userInfo = this.getProperties('firstName', 'lastName', 'username', 'email', 'password');
      let newPerson = this.store
        .createRecord("person", personProps)
        .then(person => {
          this.store.createRecord("user", { id: person.id, userProps });
        });
      return newPerson.save();
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
