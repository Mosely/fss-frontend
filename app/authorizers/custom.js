import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';
import { inject as service } from '@ember/service';

export default OAuth2Bearer.extend(DataAdapterMixin, {
  session: service('session'),

  authorize(xhr) {
    const { access_token } = this.get('session.data.authenticated');
    const authData = `Bearer ${access_token}`;
    xhr.setRequestHeader('Authorization', authData);
    // debugger;
  }
});
