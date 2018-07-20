import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  otherNote: DS.attr('string'),

  //relationships, if any
  counselee: DS.belongsTo('counselee', { async: false }),
  counselingTopic: DS.belongsTo('counselingtopic', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false })
});