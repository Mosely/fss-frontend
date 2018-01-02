import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  age: DS.attr('number'),
  genderId: DS.attr('number'),
  gender: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  passwordCreatedAt: DS.attr('date'),
  isDisabled: DS.attr('boolean')

  //relationships, if any

});
