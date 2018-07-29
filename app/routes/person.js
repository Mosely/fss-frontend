import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
  model(params) {
    let store = this.store;
    return store.findRecord('person', params.id).then(function(person) {
      //store.findRecord('gender', person.gender_id).then(function(gender) {
      //    client.set('gender', gender);
      //  });
        return person;
  });
  }
});
