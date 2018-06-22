import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  client: DS.belongsTo('client'),
  ethnicity: DS.belongsTo('ethnicity'),
  updatedBy: DS.belongsTo('user')
});