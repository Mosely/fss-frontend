import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  relation: DS.attr('string'),
  criteriaValue: DS.attr('string'),

  //relationships, if any
  reportColumn: DS.belongsTo('reportcolumn', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false })
});