import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const {
  inject: { service }
} = Ember;

//export default DS.RESTAdapter.extend(DataAdapterMixin, {
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {

  host: `${config.host}`,
  session: service('session'),
  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');
    
    xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    //debugger;
  }
});