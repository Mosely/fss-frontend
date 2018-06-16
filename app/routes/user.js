import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    // NOTE: May ahve to deserialize the returned date for it to display
    model(params) {
        return this.store.findRecord('user', params.id);
        //this.store.query('user', { filter: { id: params.id } }).then(function (user) {
        //    return user.get('firstObject');
        //});
    }
});
