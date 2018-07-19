import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			var store = this.get('store');
			if (param !== '') {
				return { data: [ store.query('user', { username: param }).data, {} ] };
			} else {
				return this.store.findAll('user');
			}
		}
	}
});
