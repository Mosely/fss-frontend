import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
	session: service("session"),
	model(params) {
    let store = this.store;
    return store.findRecord('user', params.id).then((user) => {
      store.findRecord('person', user.id).then((person) => {
        user.set('person', person);
        // store.findAll('gender').then((gender) => {
        //   console.log(person.gender);
        // });
      });
      return user;
    });
  }

});
