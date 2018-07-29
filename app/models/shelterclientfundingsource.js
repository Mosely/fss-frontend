import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClient: DS.belongsTo('shelterclient', { async: false }),
  fundingSource: DS.belongsTo('fundingsource', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false })
});