import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  streetNumber: DS.attr('number'),
  streetName: DS.attr('string'),
  streetSuffix: DS.attr('string'),
  zipcode: DS.attr('number'),
  zipcodePlusFour: DS.attr('number'),
  apartmentNumber: DS.attr('number'),

  //relationships, if any
  cityDataId: DS.belongsTo('city-data'),
  stateDataId: DS.belongsTo('state-data'),
  countyDataId: DS.belongsTo('county-data'),
  updatedBy: DS.belongsTo('person')
});
