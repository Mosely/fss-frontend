import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
  model(params) {
    let store = this.store;
    return store.findRecord('person', params.id).then((person) => {
      // store.findRecord("gender", person.genderId).then((gender) => {
      //   person.set("gender", gender);
      // });
      return person;
    });
  }
});
