import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('user', { async: false }),
  counseleeChildSiblings: DS.hasMany('counseleechildsibling', { async: false }),
  people: DS.hasMany('person', { async: false })
});
