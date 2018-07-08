import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			if (param !== '') {
				return this.get('store').query('user', { username: param });
			} else {
				return this.store.findAll('user');
			}
		}
	}
});
