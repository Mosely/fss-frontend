import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
	model() {
		let store = this.store;
		return store.findAll('tablecolumn').then((tablecolumns) => {
			return tablecolumns;
		});
	}
});
