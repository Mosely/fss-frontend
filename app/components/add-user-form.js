import Component from "@ember/component";
import Ember from "ember";

const {
  inject: { service }
} = Ember;
export default Component.extend({
  session: service("session"),

  actions: {
    submit() {
      // Fires the save action in the controller and passes arguments of the user
      // object set to the model
      let user = this.get('user');
      this.attrs.triggerSave(user);
    }
  }
});
