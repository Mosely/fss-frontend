import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('person'),
  counseleeMedications: DS.hasMany('counselee-medication')
});