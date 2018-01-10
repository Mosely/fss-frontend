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
  cityData: DS.belongsTo('city-data'),
  stateData: DS.belongsTo('state-data'),
  countyData: DS.belongsTo('county-data'),
  updatedBy: DS.belongsTo('person'),
  personAddresses: DS.hasMany('person-address')
});