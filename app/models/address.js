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
  cityData: DS.belongsTo('citydata'),
  stateData: DS.belongsTo('statedata'),
  countyData: DS.belongsTo('countydata'),
  updatedBy: DS.belongsTo('user'),
  personAddresses: DS.hasMany('personaddress')
});