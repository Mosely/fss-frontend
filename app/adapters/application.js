import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import config from '../config/environment';

//export default DS.RESTAdapter.extend(DataAdapterMixin, {
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {

  host: `${config.host}`,
  pathForType: function(type) {
    return type.replace(/-/g,'');
  },
  session: service('session'),
  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');

    xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    // debugger;
  }
});
