import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClient: DS.belongsTo('shelterclient'),
  identityPreference: DS.belongsTo('identitypreference'),
  updatedBy: DS.belongsTo('user')
});