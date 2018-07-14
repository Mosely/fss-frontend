import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        let store = this.store;
        return this.store.findRecord('shelterclient', params.id).then(function(shelterclient) {
            store.findRecord('client', shelterclient.id).then(function(client) {
                shelterclient.set('client', client);
              });
        });
    }
});
