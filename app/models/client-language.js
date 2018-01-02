import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  isPrimary: DS.attr('boolean'),
  otherNote: DS.attr('string'),

  //relationships, if any
  clientId: DS.belongsTo('client'),
  languageId: DS.belongsTo('language'),
  updatedBy: DS.belongsTo('person')
});
