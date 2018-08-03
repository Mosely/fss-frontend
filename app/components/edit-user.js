import Component from '@ember/component';

export default Component.extend({

	actions: {
		update(){
			let updatedPerson,
				updatedUser,
				uid,
        store = this.store;

			uid = this.get("user.id");
			updatedPerson = this.get("person", uid).setProperties({
				firstName: this.get("user.person.firstName"),
				middleName: this.get("user.person.middleName"),
				lastName: this.get("user.person.lastName"),
				dateOfBirth: this.get("user.person.dateOfBirth"),
			});
			updatedUser = this.get("user", uid).setProperties({
				username: this.get("user.username"),
				email: this.get("user.email"),
			});
			console.log(updatedPerson);
			console.log(updatedUser);
			// updatedUser = this.get('user', uid).then((user) => {
			// 	user.set('username', this.get("user.username"));
			// });
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
