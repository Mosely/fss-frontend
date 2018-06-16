import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
  model(params) {
    //return this.store.findRecord('person', params.id)[0];
    this.store.query('person', { filter: { id: params.id } }).then(function (person) {
      return person.get('firstObject');
    });
  }
});
