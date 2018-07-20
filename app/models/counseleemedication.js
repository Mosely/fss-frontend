import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  reason: DS.attr('string'),

  //relationships, if any
  counselee: DS.belongsTo('counselee', { async: false }),
  medication: DS.belongsTo('medication', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false })
});