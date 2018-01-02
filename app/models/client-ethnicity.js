
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  clientId: DS.belongsTo('client'),
  ethnicityId: DS.belongsTo('ethnicity'),
  updatedBy: DS.belongsTo('person')
});
