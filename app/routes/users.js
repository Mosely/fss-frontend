import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
  //model() {
  //  return this.store.findAll('user');
  //}
  //model() {
  //  var promise = new Ember.RSVP.Promise(function (resolve, reject) {
  //    this.store.findAll('user').then(function (users) {
  //      var personPromises = users.map(function(s){ return s.get('person') });
  //      Ember.RSVP.all(personPromises).then(function () {
  //        resolve(users);
  //      });
  //    });
  //  });
  //  return promise;
 // }
  model() {
    return this.store.findAll('user').then(function (users) {
      return users.forEach((user) => {
        user.get('person');
      });
    });
  }
});
