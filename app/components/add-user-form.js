import Component from "@ember/component";
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service("session"),

  actions: {
    triggerSave() 
    //{
    //  this.sendAction('triggerSave');
    //}
    {
      let store = this.store;

      let personProps = this.getProperties('firstName', 'middleName', 'lastName', 'dateOfBirth', 'age');
      console.log(model);
      let userProps = {
        username: this.get("username"),
        email: this.get("email"),
        password: this.get("password")
      };
      let newPerson = store.createRecord("person", personProps);
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
