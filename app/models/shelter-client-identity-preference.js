
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClientId: DS.belongsTo('shelter-client'),
  identityPreferenceId: DS.belongsTo('identity-preference'),
  updatedBy: DS.belongsTo('person')
});
