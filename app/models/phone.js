import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  areaCode: DS.attr('number'),
  phoneNumber: DS.attr('number'),
  extension: DS.attr('number'),
  phoneType: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('user'),
  personPhones: DS.hasMany('personphone')
});