import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  // model hook to return an empty User record
  actions: {
    addUser() {
      let userInfo = this.getProperties('firstName', 'lastName', 'username', 'email', 'password');
      let newUser = this.store.createRecord('user', userInfo);
      console.log("Hello");
      return newUser.save();
    }
  }
});
