import Component from '@ember/component';

export default Component.extend({

	actions: {
		update(){
			let updatedPerson,
				updatedUser,
				uid,
        store = this.store;

			uid = this.get("user.id");
			updatedUser = this.get("user");
			console.log(updatedUser);
			updatedUser.save();
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
