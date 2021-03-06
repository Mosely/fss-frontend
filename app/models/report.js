import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),
  type: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('user'),
  reportColumns: DS.hasMany('report-column')
});