import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  usedFormAssistance: DS.attr('boolean'),
  assistantName: DS.attr('string'),
  assistantRelationship: DS.attr('string'),
  isRural: DS.attr('boolean'),
  isUrban: DS.attr('boolean'),
  hasTanfForm: DS.attr('boolean'),
  enterDate: DS.attr('date'),
  exitDate: DS.attr('date'),
  notes: DS.attr('string'),

  //relationships, if any
  advocateUser: DS.belongsTo('advocate-user'),
  updatedBy: DS.belongsTo('person'),
  shelterClientAdditionalStaffs: DS.hasMany('shelter-client-additional-staff'),
  shelterClientFundingSources: DS.hasMany('shelter-client-funding-source'),
  shelterClientIdentityPreferences: DS.hasMany('shelter-client-identity-preference')
});