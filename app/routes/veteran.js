import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        let store = this.store;
        return this.store.findRecord('veteran', params.id).then(function(veteran) {
            store.findRecord('client', veteran.id).then(function(client) {
                veteran.set('client', client);
              });
        });
    }
});
