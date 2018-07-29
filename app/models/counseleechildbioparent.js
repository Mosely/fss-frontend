import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  type: DS.attr('string'),
  name: DS.attr('string'),
  age: DS.attr('number'),
  occupation: DS.attr('string'),
  healthProblems: DS.attr('string'),
  isDeceased: DS.attr('boolean'),
  ageAtDeath: DS.attr('number'),
  childAgeWhenBioDied: DS.attr('number'),
  causeOfDeath: DS.attr('string'),

  //relationships, if any
  counseleeChild: DS.belongsTo('counseleechild', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false })
});