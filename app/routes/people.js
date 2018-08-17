import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = this.store;
    return this.store.findAll('person', { reload: true }).then(function(people) {
      people.forEach(person => {
        store.findRecord('user', person.id, { reload: true }).then(function(user) {
          person.set('user', user);
        });
      });
      return people;
    });
  }
});
