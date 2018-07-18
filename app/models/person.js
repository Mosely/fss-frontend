import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  age: DS.attr('number'),

  //relationships, if any
  gender: DS.belongsTo('gender'),
  updatedBy: DS.belongsTo('user'),
  personAddresses: DS.hasMany('personaddress'),
  personPhones: DS.hasMany('personphone')
});