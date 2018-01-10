import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClient: DS.belongsTo('shelter-client'),
  identityPreference: DS.belongsTo('identity-preference'),
  updatedBy: DS.belongsTo('person')
});