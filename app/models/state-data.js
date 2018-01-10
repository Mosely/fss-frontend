import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),
  stateCode: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('person'),
  addresses: DS.hasMany('address'),
  schools: DS.hasMany('school')
});