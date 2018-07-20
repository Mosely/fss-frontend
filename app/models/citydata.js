import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('user', { async: false }),
  addresses: DS.hasMany('address', { async: false }),
  schools: DS.hasMany('school', { async: false })
});