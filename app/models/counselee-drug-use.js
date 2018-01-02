import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  ageWhenFirstUsed: DS.attr('number'),

  //relationships, if any
  counseleeId: DS.belongsTo('counselee'),
  drugUseId: DS.belongsTo('drug-use'),
  updatedBy: DS.belongsTo('person')
});
