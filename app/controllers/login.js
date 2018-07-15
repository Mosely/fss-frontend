import Controller from "@ember/controller";
import { inject as service } from '@ember/service';

export default Controller.extend({
  // injecting session service
  session: service("session"),

  actions: {
    authenticate() {
      let session = this.get("session");
      let credentials = this.getProperties("identification", "password"),
        authenticator = "authenticator:oauth2";

      //calling authenticate method to authenticate user
      session
        .authenticate(authenticator, credentials)
        .then(() => {
          console.log("the auth data:" + this.get('session.data.authenticated'));
          console.log("Maybe the user_id: " + this.get('session.data.authenticated.user_id'));
          console.log("Maybe the sub: " + this.get('session.data.authenticated.sub'));
          let id = this.get('session.data.authenticated.user_id');
          //this.store.queryRecord('user', {}).then((user) => {
          this.store.findRecord('user', id).then((user) => {
            session.set('currentUser', user);
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
