import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    // NOTE: May ahve to deserialize the returned date for it to display
    model(params) {
        let store = this.store;
        return store.findRecord('user', params.id).then(function (user) {
            store.findRecord('person', user.id).then(function(person) {
                user.set('person', person);
              });
            return user;
        });
        //this.store.query('user', { filter: { id: params.id } }).then(function (user) {
        //    return user.get('firstObject');
        //});
    },
    session: service('session'),
    currentUser: service(),

    beforeModel() {
      this._loadCurrentUser();
    },

    sessionAuthenticated() {
      this._super(...argutments);
      this._loadCurrentUser();
    },

    _loadCurrentUser() {
      console.log("test");
      return this.get('currentUser').loadUser().cath(() => this.get('session').invalidate());
    }
});
