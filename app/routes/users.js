import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
   model() {
    let store = this.store;
    return store.findAll('user').then(function(users){
      users.forEach(user => {
        store.findRecord('person', user.id).then(function(person) {
          store.findRecord('gender', person.genderId).then(function(gender) {
            person.set('gender', gender);
          });
          user.set('person', person);
        });
      });
      return users;
    });
   }
});
