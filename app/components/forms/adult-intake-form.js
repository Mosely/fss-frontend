import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service("session"),
  router: service(),
  store: service("store"),

  actions: {
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
      // Getting person properties
      personProps = this.getProperties(
        "firstName",
        "middleName",
        "lastName",
        "dateOfBirth"
      );
      // Setting newPerson to newly created record
      newPerson = store.createRecord("person", personProps);
      //Saving the newPerson object
      newPerson.save().then(function(person) {
        /**
         * Creating and saving address and personaddress records and
         * setting properties.
         **/
        // Getting address props
        let addressProps = this.getProperties(
          "streetNumber",
          "streetName",
          "streetSuffix",
          "apartmentNumber",
          "zipcode"
        );
        // creating newAddress record
        let newAddress = store.createRecord("address", addressProps);
        // Saving newAddress then setting properties
        newAddress.save().then(function(address) {
          address.set("cityData", this.get("selectedCities"));
          address.set("stateData", this.get("selectedStates"));
          address.set("countyData", this.get("selectedCounties"));
          // Creating personAddress record and setting it to personAddresses
          let personAddress = store.createRecord("personaddress", {
            personId: person.get("id"),
            addressId: address.get("id"),
            isPrimary: this.get("isPrimaryAddress")
          });
          person.set("personAddresses", personAddress);
        });

        /**
         * Creating and saving phone and personphone records and
         * setting properties.
         **/
        // getting phone properties
        let phoneProps = this.getProperties(
          "areaCode",
          "phoneNumber",
          "extension",
          "phoneType"
        );
        // creating newPhone record
        let newPhone = store.createRecord("phone", phoneProps);
        // saving newPhone and personPhone record and setting properties
        newPhone.save().then(function(phone) {
          let personPhone = store.createRecord("personphone", {
            personId: person.get("id"),
            phoneId: phone.get("id"),
            isPrimary: this.get("isPrimaryPhone"),
            canCall: this.get("canCall")
          });
        });

        // returning person object model
        // return person;
      });

      // Getting client proerties
      let clientProps = this.getProperties(
        "socialSecurityNumber",
        "placeOfEmployment",
        "isServiceMemberOrVeteran",
        "hasFamilyWhoIsServiceMemberOrVeteran",
        "isReferredByVeteranResourceCenter",
        "referral"
      );
      let newClient = store.createRecord("client", clientProps);
    }
  }
});
