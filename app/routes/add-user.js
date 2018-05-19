import Route from "@ember/routing/route";
// import UnauthenticatedRouteMixin from "ember-simple-auth/mixins/unauthenticated-route-mixin";

export default Route.extend( {
  // model hook to return an empty User record
  model() {
    return this.store.createRecord("user");
  }
});
