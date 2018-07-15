import Controller from "@ember/controller";
import { inject as service } from '@ember/service';

function parseBase64(token) {
  let tokenData;
  try {
    tokenData = atob(token.split('.')[1]);
    return JSON.parse(tokenData);
  } catch (e) {

    return token;
  }
}

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
          //let id = this.get('session.data.authenticated.user_id');

           // parseBase64 just converts the base64 encoded string to a javascript object
        let t = parseBase64(session.get('session.data.authenticated.access_token'));

        // 'sub' is the user's id, as per the JWT draft specification
        this.store.findRecord('user', t['sub']).then((user) => {
          // we can store the current user in the ember-simple-auth session
          session.set('currentUser', user);
        });

          //this.store.queryRecord('user', {}).then((user) => {
          //this.store.findRecord('user', id).then((user) => {
          //  session.set('currentUser', user);
          //});
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
