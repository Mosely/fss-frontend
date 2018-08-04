import Component from '@ember/component';

export default Component.extend({
	actions: {
		update(){
			let updatedPerson,
				props,
				updatedUser;

			updatedPerson = this.get("user.person");
			updatedUser = this.get("user");
			updatedPerson.setProperties({
				firstName: this.get("user.person.firstName"),
				middleName: this.get("user.person.middleName"),
				lastName: this.get("user.person.lastName"),
				dateOfBirth: this.get("user.person.dateOfBirth"),
			});
			updatedPerson.set("age", null);

			updatedUser.setProperties({
				username: this.get("user.username"),
				email: this.get("user.email")
			});
			// saving person rtecord then saving user record.
			updatedPerson.save().then(() => {
				updatedUser.save();
			});
		},
		cancle(){

		},
		destroy() {

		}
	}

});
