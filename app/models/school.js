
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),
  street: DS.attr('string'),
  zipcode: DS.attr('number'),
  zipcodePlusFour: DS.attr('number')

  //relationships, if any
  cityDataId: DS.belongsTo('city-data'),
  stateDataId: DS.belongsTo('state-data'),
  updatedBy: DS.belongsTo('person')
});
