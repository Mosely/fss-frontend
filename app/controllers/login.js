import Controller from "@ember/controller";
import Ember from "ember";

const {
  inject: { service }
} = Ember;
export default Controller.extend({
  // injecting session service
  session: service("session"),

  actions: {
    authenticate() {
      let session = this.get("session");
      let credentials = this.getProperties("identification", "password"),
        authenticator = "authenticator:jwt";

      //calling authenticate method to authenticate user
      session
        .authenticate(authenticator, credentials)
        .then(() => {
          let uid = this.get("session.data.authenticated.id");
          this.store.findRecord("user", uid).then(user => {
            session.set("currentUser", user);
          });
        })
        .catch(reason => {
          this.set("errorMessage", reason.error || reason);
        });
    },
    handleInput() {
      //variables for the username and password field to animate the label
      var unLabel = document.querySelectorAll(".username-label")[0];
      var unVal = document.getElementById("identification").value;
      var pwLabel = document.querySelectorAll(".password-label")[0];
      var pwVal = document.getElementById("password").value;

      if (unVal != "") {
        unLabel.classList.add("focused");
      } else {
        unLabel.classList.remove("focused");
      }
      if (pwVal != "") {
        pwLabel.classList.add("focused");
      } else {
        pwLabel.classList.remove("focused");
      }
    }
  }
});
