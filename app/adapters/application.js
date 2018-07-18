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
  urlForQueryRecord({ slug }, modelName) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/${encodeURIComponent(slug)}`;
  },
  urlForQuery(query, modelName) {
    modelName = Inflector.inflector.pluralize(modelName);
    let baseUrl = this.buildURL();
    
    //console.log(baseUrl);
    //console.log(modelName);
    //console.log(query);

    let queryKeys = Object.keys(query);
    let searchSegments = "";
    for(let i = 0; i < count(queryKeys); i++) {
      searchSegments += "/" + queryKeys[i] + "/" + query[queryKeys[i]];
    }
    return `${baseUrl}/${modelName}${searchSegments}`;
  }
});
