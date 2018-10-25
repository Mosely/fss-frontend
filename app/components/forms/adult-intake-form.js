import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service("session"),
  router: service(),
  store: service("store"),

  actions: {
    // ifYesToggle(value) {
    //   let store = this.get("store");
    //   let parentElem = document.getElementById(event.target.parentElement.id);
    //   let targetElem = document.getElementById(parentElem.dataset.toggle);
    //   console.log(this.get("hasBeenAbused"));
    //   console.log(this.get("groupValue"));
    //   console.log(value);
    //   if (value == "true" && targetElem.classList.contains("hidden")) {
    //     targetElem.classList.remove("hidden");
    //     targetElem.classList.add("active");
    //   } else {
    //     targetElem.classList.remove("active");
    //     targetElem.classList.add("hidden");
    //   }
    // },
    updateEthnicity(value) {
      let store = this.get("store");
      store.find("ethnicity", value).then(model => {
        this.set("ethnicity", model);
      });
    },
    updateTopics(newSelection) {
      let topics;
      this.set("selectedTopics", newSelection);
      topics = this.get("selectedTopics");
      this.set("counselingtopic", topics);
    },
    updateDrugUse(newSelection) {
      let drugs;
      this.set("selectedDrugs", newSelection);
      drugs = this.get("selectedDrugs");
      this.set("druguse", drugs);
    },
    /**
     * Creates a record to save a new patient
     *
     * @return the saved records of the person and client.
     **/
    triggerSave() {
      let personProps,
        newPerson,
        store = this.get("store");
      /**
       * Creating and saving person record and setting properties.
       **/
      console.log(this.get("hasBeenAbused"));
      // Getting person properties
      // personProps = this.getProperties(
      //   "firstName",
      //   "middleName",
      //   "lastName",
      //   "dateOfBirth"
      // );
      // // Setting newPerson to newly created record
      // newPerson = store.createRecord("person", personProps);
      // //Saving the newPerson object
      // newPerson.save().then(function(person) {
      //   /**
      //    * Creating and saving address and personaddress records and
      //    * setting properties.
      //    **/
      //   // Getting address props
      //   let addressProps = this.getProperties(
      //     "streetNumber",
      //     "streetName",
      //     "streetSuffix",
      //     "apartmentNumber",
      //     "zipcode"
      //   );
      //   // creating newAddress record
      //   let newAddress = store.createRecord("address", addressProps);
      //   // Saving newAddress then setting properties
      //   newAddress.save().then(function(address) {
      //     address.set("cityData", this.get("selectedCities"));
      //     address.set("stateData", this.get("selectedStates"));
      //     address.set("countyData", this.get("selectedCounties"));
      //     // Creating personAddress record and setting it to personAddresses
      //     let personAddress = store.createRecord("personaddress", {
      //       personId: person.get("id"),
      //       addressId: address.get("id"),
      //       isPrimary: this.get("isPrimaryAddress")
      //     });
      //     person.set("personAddresses", personAddress);
      //   });
      //
      //   /**
      //    * Creating and saving phone and personphone records and
      //    * setting properties.
      //    **/
      //   // getting phone properties
      //   let phoneProps = this.getProperties(
      //     "areaCode",
      //     "phoneNumber",
      //     "extension",
      //     "phoneType"
      //   );
      //   // creating newPhone record
      //   let newPhone = store.createRecord("phone", phoneProps);
      //   // saving newPhone and personPhone record and setting properties
      //   newPhone.save().then(function(phone) {
      //     let personPhone = store.createRecord("personphone", {
      //       personId: person.get("id"),
      //       phoneId: phone.get("id"),
      //       isPrimary: this.get("isPrimaryPhone"),
      //       canCall: this.get("canCall")
      //     });
      //     person.set("personPhones", personPhone);
      //   });
      //
      //   /**
      //    * Creating client record
      //    **/
      //   // Getting client proerties
      //   let clientProps = this.getProperties(
      //     "socialSecurityNumber",
      //     "placeOfEmployment",
      //     "isServiceMemberOrVeteran",
      //     "hasFamilyWhoIsServiceMemberOrVeteran",
      //     "isReferredByVeteranResourceCenter",
      //     "referral"
      //   );
      //   // creating newClient record
      //   let newClient = store.createRecord("client", clientProps);
      //   // saving newClient record
      //   newClient.save().then(function(client) {
      //     client.set("id", person.get("id"));
      //     //creating clientEthnicities record
      //     let clientEthnicities = store.createRecord("clientethnicity", {
      //       clientId: client.get("id"),
      //       ethnicityId: this.get("clientEthnicities")
      //     });
      //     //setting clientEthnicities
      //     client.set("clientEthnicities", clientEthnicities);
      //     let clientLanguages = store.createRecord("clientlanguage", {
      //       clientId: client.get("id"),
      //       languageId: this.get("clientLanguages"),
      //       isPrimary: this.get("isPrimaryLanguage")
      //     });
      //     client.set("clientLanguages", clientLanguages);
      //
      //     /**
      //      * Creating counselee record
      //      **/
      //     let counseleeProps = this.getProperties();
      //     let newCounselee = store.createRecord("counselee");
      //   });
      //   // returning person object model
      //   // return person;
      // });
    }
  }
});
