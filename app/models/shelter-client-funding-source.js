
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClientId: DS.belongsTo('shelter-client'),
  fundingSourceId: DS.belongsTo('funding-source'),
  updatedBy: DS.belongsTo('person')
});
