import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  reason: DS.attr('string'),

  //relationships, if any
  counselee: DS.belongsTo('counselee'),
  medication: DS.belongsTo('medication'),
  updatedBy: DS.belongsTo('user')
});