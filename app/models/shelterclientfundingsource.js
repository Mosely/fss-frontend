import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClient: DS.belongsTo('shelterclient'),
  fundingSource: DS.belongsTo('fundingsource'),
  updatedBy: DS.belongsTo('user')
});