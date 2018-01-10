import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClient: DS.belongsTo('shelter-client'),
  user: DS.belongsTo('user'),
  updatedBy: DS.belongsTo('person')
});