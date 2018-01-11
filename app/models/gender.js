import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('user'),
  counseleeChildSiblings: DS.hasMany('counselee-child-sibling'),
  people: DS.hasMany('person')
});
