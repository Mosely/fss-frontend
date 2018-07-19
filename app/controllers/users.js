import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			if (param !== '') {
				return { data: [ this.get('store').query('user', { username: param }).data ] };
			} else {
				return this.store.findAll('user');
			}
		}
	}
});
