import Component from '@ember/component';

export default Component.extend({

	actions: {
		update(){
			let updatedPerson,
				updatedUser,
        store = this.get("store");
			// updatedPerson = this.get("person").setProperties({
			// 	firstName: this.get("user.person.firstName"),
			// 	middleName: this.get("user.person.middleName"),
			// 	lastName: this.get("user.person.lastName"),
			// 	dateOfBirth: this.get("user.person.dateOfBirth"),
			// });
			updatedUser = this.get("user").setProperties({
				username: this.get("user.person.username"),
				email: this.get("user.person.email"),
				gender: this.get("user.person.gender"),
			});
			updatedUser.save();
		},
		cancle(){

		},
		destroy() {

		}
	}

});

// import Component from '@ember/component';
// import { inject as service } from "@ember/service";
//
// export default Component.extend({
//     store: service("store"),
//     actions: {
//         update() {
//             //let store = this.get('store');
//             let user = this.get('user');
//             user.save();
//         }
//     }
// });
