import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';
const { RSVP: { Promise }, $: { ajax }, run } = Ember;
export default Base.extend({

  //tokenEndpoint: `${config.host}/login`,
  tokenEndpoint: `http://nginx3.pantheon.local/login`,

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
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
      //auth: {
        username: identification,
        password
      //}
    });

    // request option with the url of the tokenEndPoint, the JSON-ified creds
    // and other bits of info
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };

    // Creating a new Promise that makes the ajax request the endpoint
    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        const { jwt } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: jwt
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
