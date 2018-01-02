import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  reason: DS.attr('string'),

  //relationships, if any
  counseleeId: DS.belongsTo('counselee'),
  medicationId: DS.belongsTo('medication'),
  updatedBy: DS.belongsTo('person')
});
