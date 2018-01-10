import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('person'),
  counseleeChildSiblings: DS.hasMany('counselee-child-sibling'),
  persons: DS.hasMany('person')
});