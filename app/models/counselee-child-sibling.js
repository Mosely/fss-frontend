
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  type: DS.attr('string'),
  age: DS.attr('number'),
  relationshipDesc: DS.attr('string'),
  isDead: DS.attr('boolean'),
  ageAtDeath: DS.attr('number')

  //relationships, if any
  counseleeChildId: DS.belongsTo('counselee-child'),
  genderId: DS.belongsTo('gender'),
  updatedBy: DS.belongsTo('person')
});
