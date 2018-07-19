import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			var store = this.get('store');
			if (param !== '') {
				return store.query('user', { username: param });
			} else {
				return this.store.findAll('user');
			}
		}
	}
});
