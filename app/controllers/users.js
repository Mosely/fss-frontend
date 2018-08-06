import Controller from '@ember/controller';

export default Controller.extend({
	userToDelete: null,

	actions: {
		filterByName(param) {
			var store = this.get('store');
			if (param !== '') {
				return store.query('user', { username: param }).then((results) => {
					return { query: param, results: results };
				});
			} else {
				return this.store.findAll('user').then((results) => {
					return { query: param, results: results };
				});
			}
		},
	}
});
