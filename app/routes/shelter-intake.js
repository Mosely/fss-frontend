import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";
import RSVP from "rsvp";
import { A } from "@ember/array";

export default Route.extend(AuthenticatedRouteMixin, {
  session: service("session"),
  selectedTopics: A(),
  selectedDrugs: A(),

  model() {
    let store = this.store;
    let scopes = this.get("session.data.authenticated.scope");
    if (scopes.indexOf("shelter_client") < 0) {
      // transition to dashboard and display unauthorizedmessage
      this.transitionTo("dashboard").then(function() {
        alert("Not Authorized");
      });
      return false;
    } else {
      console.log("Authorized to see this.");
    }
    return RSVP.hash({
      cities: store.findAll("citydata"),
      counties: store.findAll("countydata"),
      ethnicities: store.findAll("ethnicity"),
      fundingSources: store.findAll("fundingsource"),
      genders: store.findAll("gender"),
      identies: store.findAll("identitypreference"),
      languages: store.findAll("language"),
      states: store.findAll("statedata"),
      people: store.findAll("person")
    });
  }
});
