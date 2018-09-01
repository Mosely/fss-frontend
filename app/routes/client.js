import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    // model(params) {
    //     let store = this.store;
    //     return this.store.findRecord('client', params.id).then(function(client) {
    //         store.findRecord('person', client.id).then(function(person) {
    //             client.set('person', person);
    //           });
    //     });
    // }
});
