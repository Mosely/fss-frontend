import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        let store = this.store;
        return store.findRecord('user', params.id).then(function (user) {
            store.findRecord('person', user.id).then(function(person) {
                user.set('person', person);
                return person;
              });
            return user;
        });
    },
});
