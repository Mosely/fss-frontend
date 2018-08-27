import Component from '@ember/component';

export default Component.extend({
	classNames: ['list-view'],
	userToDelete: null,

	actions: {
		setUserToDelete(user) {
			this.set('userToDelete', user);
		},

		cancelDeletingUser() {
			this.set('userToDelete', null);
		},
		deleteUser(user) {
			return user.destroyRecord().then(() => {
				this.set('userToDelete', null);
			});
		}
	}


});
