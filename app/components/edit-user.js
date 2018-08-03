import Component from '@ember/component';

export default Component.extend({

	actions: {
		update(){
			let updatedPerson,
				updatedUser,
				uid,
        store = this.store;
			// updatedUser = this.get("user");
			updatedUser = this.get("user").setProperties({
				username: this.get("user.username"),
				email: this.get("user.email"),
			});
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
