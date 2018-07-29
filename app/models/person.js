import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  age: DS.attr('number'),

  //relationships, if any
  gender: DS.belongsTo('gender', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false }),
  personAddresses: DS.hasMany('personaddress', { async: false }),
  personPhones: DS.hasMany('personphone', { async: false })
});
