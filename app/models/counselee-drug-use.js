import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  ageWhenFirstUsed: DS.attr('number'),

  //relationships, if any
  counselee: DS.belongsTo('counselee'),
  drugUse: DS.belongsTo('drug-use'),
  updatedBy: DS.belongsTo('user')
});