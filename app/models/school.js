import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),
  street: DS.attr('string'),
  zipcode: DS.attr('number'),
  zipcodePlusFour: DS.attr('number'),

  //relationships, if any
  cityData: DS.belongsTo('city-data'),
  stateData: DS.belongsTo('state-data'),
  updatedBy: DS.belongsTo('user'),
  counseleeChildren: DS.hasMany('counselee-child')
});