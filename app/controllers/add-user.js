import Controller from "@ember/controller";
import Ember from "ember";

const {
  inject: { service }
} = Ember;
export default Controller.extend({
  session: service("session"),

  actions: {
    save(user) {
      let newUser = user;
      newUser.save().catch(error => {
        this.set("errorMessage", error);
      });
    }
  }
});
