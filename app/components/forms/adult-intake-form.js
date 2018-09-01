import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session: service("session"),
	router: service(),
	store: service("store"),

	actions: {
		updateEthnicity(value) {
			let store = this.get("store");
			store.find("ethnicity", value).then((model) => {
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
     * @return the saved records of the person then user model.
     **/
		triggerSave() {
			let personProps, newPerson, store = this.get("store");
			// Getting person properties
			personProps = this.getProperties(
				"firstName",
				"middleName",
				"lastName",
				"dateOfBirth"
			);
			// Setting newPerson to newly created record
			newPerson = store.createRecord("person", personProps);
			// Getting address props
			let addressProps = this.getProperties(
				"streetNumber",
				"streetName",
				"apartmentNumber",
				"zipcode"
			);
			// Setting newAddress to newly created record
			let newAddress = store.createRecord("address", addressProps);
			// Setting newAddress cityData, stateData, countyData properties
			newAddress.set("cityData", this.get("selectedCities"));
			newAddress.set("stateData", this.get("selectedStates"));
			newAddress.set("countyData", this.get("selectedCounties"));

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
