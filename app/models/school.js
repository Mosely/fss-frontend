import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),
  street: DS.attr('string'),
  zipcode: DS.attr('number'),
  zipcodePlusFour: DS.attr('number'),

  //relationships, if any
  cityData: DS.belongsTo('citydata', { async: false }),
  stateData: DS.belongsTo('statedata', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false }),
  counseleeChildren: DS.hasMany('counseleechild', { async: false })
});