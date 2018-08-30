import Ember from "ember";
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from "../config/environment";
import { inject as service } from '@ember/service';

const {
  RSVP: { Promise },
  $: { ajax },
  run
} = Ember;

function parseBase64(token) {
  let tokenData;
  try {
    tokenData = atob(token.split('.')[1]);
    return JSON.parse(tokenData);
  } catch (e) {

    return token;
  }
}

export default OAuth2PasswordGrantAuthenticator.extend({
  tokenEndpoint: `${config.host}`,
  currentUser: service("current-user"),
  session: service('session'),
  //tokenEndpoint: `http://nginx3.pantheon.local/login`,

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.access_token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    const { identification, password } = creds;
    // Constructing JSON object from credentials
    const data = JSON.stringify({
      username: identification,
      password,
      grant_type: 'password',
      client_id: 'fssfrontend',
      client_secret: '123',
      scope: ''
    });

    // request option with the url of the tokenEndPoint, the JSON-ified creds
    // and other bits of info
    const requestOptions = {
      url: `${this.tokenEndpoint}/login`,
      type: "POST",
      data,
      contentType: "application/json",
      dataType: "json"
    };

    // Creating a new Promise that makes the ajax request the endpoint
    return new Promise((resolve, reject) => {
      return ajax(requestOptions).then ( (response) => {
        const { access_token, refresh_token } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            access_token: access_token,
            refresh_token: refresh_token
          });
        });
        let t = parseBase64(access_token);
        session.data.scope = t['scopes'];
        console.log(t['scopes']);
        //console.table(session.data.scope);
      },
      error => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      }
      );
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
