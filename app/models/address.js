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
  cityData: DS.belongsTo('citydata', { async: false }),
  stateData: DS.belongsTo('statedata', { async: false }),
  countyData: DS.belongsTo('countydata', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false }),
  personAddresses: DS.hasMany('personaddress', { async: false })
});