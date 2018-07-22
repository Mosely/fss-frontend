import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import config from '../config/environment';
import Inflector from 'ember-inflector';

//import { pluralize } from 'ember-inflector';

//export default DS.RESTAdapter.extend(DataAdapterMixin, {
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {

  host: `${config.host}`,
  //pathForType: function(type) {
  //  let typeCleaned = type.replace(/-/g,'');
  //  return pluralize(typeCleaned);
  //},
  session: service('session'),
  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');

    xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    // debugger;
  }, 
  urlForQueryRecord(query, modelName) {
    modelName = Inflector.inflector.pluralize(modelName);
    let baseUrl = this.buildURL();
    let queryKeys = Object.keys(query);
    let searchSegments = "";
    for(let i = 0; i < queryKeys.length; i++) {
      searchSegments += "/" + queryKeys[i] + "/" + query[queryKeys[i]];
    }
    query = null;
    return `${baseUrl}/${modelName}${searchSegments}`;
  },
  urlForQuery(query, modelName) {
    modelName = Inflector.inflector.pluralize(modelName);
    let baseUrl = this.buildURL();
    let queryKeys = Object.keys(query);
    let searchSegments = "";
    for(let i = 0; i < queryKeys.length; i++) {
      searchSegments += "/" + queryKeys[i] + "/" + query[queryKeys[i]];
    }
    query = null;
    return `${baseUrl}/${modelName}${searchSegments}`;
  },
  // Should send updates via PUT, instead of PATCH
  methodForRequest({ requestType }) {
    if (requestType === "updateRecord") {
      return "PUT";
    }

    return this._super(...arguments);
  }
});
