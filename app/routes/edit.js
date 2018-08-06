import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    let store = this.store;
    return store.findRecord('user', params.id).then((user) => {
      store.findRecord('person', user.id).then((person) => {
        user.set('person', person);
        Object.keys(person.toJSON()).forEach(function(prop) { console.log(prop + " " + person.get(prop)); } )
        store.findRecord('gender', person.get('genderId')).then(function(gender) {
          person.set('gender', gender);
        });
      });
      return user;
    });
  },

});
