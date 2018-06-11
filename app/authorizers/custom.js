import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';
import Ember from "ember";

const {
  inject: { service }
} = Ember;
export default OAuth2Bearer.extend(DataAdapterMixin, {
  session: service('session'),

  authorize(xhr) {
    const { access_token } = this.get('session.data.authenticated');
    const authData = `Bearer ${access_token}`;
    xhr.setRequestHeader('Authorization', authData);
    debugger;
  }
});
