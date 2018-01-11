import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClient: DS.belongsTo('shelter-client'),
  fundingSource: DS.belongsTo('funding-source'),
  updatedBy: DS.belongsTo('user')
});