import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  isPrimary: DS.attr('boolean'),
  otherNote: DS.attr('string'),

  //relationships, if any
  client: DS.belongsTo('client'),
  language: DS.belongsTo('language'),
  updatedBy: DS.belongsTo('person')
});