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
      //this.set("gender", value);
      let store = this.get("store");
      store.find("gender", value).then((model) => {
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
        //"gender",
        "dateOfBirth",
        "age"
      );

      //Ember.$.getJSON('http://localhost:9393/artists', function(artists) {
      //artists.forEach(function(data) {
      //  artistObjects.pushObject(App.Artist.createRecord(data));
      //});
    //});

      //genderModel = store.findRecord("gender", personProps.gender).then((gender) => {
      //  return gender;
      //});
      //personProps.gender = genderModel;
      //personProps.genderId = personProps.gender;

      newPerson = store.createRecord("person", personProps);
      newPerson.set("gender", this.get("gender"));
      console.table(newPerson);
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
