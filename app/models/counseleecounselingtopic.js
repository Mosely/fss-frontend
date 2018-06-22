import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  otherNote: DS.attr('string'),

  //relationships, if any
  counselee: DS.belongsTo('counselee'),
  counselingTopic: DS.belongsTo('counselingtopic'),
  updatedBy: DS.belongsTo('user')
});