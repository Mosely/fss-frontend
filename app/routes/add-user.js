import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  
  // actions: {
  //   // model hook to return an empty User record
  //   addUser() {
  //     let attrs = this.getProperties(
  //       "firstName",
  //       "middleName",
  //       "lastName",
  //       "username",
  //       "dateOfBirth",
  //       "email",
  //       "password"
  //     );
  //     let newUser = this.store.createRecord("user", attrs);
  //     return newUser.save();
  //   }
  // }

});
