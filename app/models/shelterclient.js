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
  advocateUser: DS.belongsTo('person', {inverse: null}),
  updatedBy: DS.belongsTo('user', { async: false }),
  shelterClientAdditionalStaff: DS.hasMany('shelterclientadditionalstaff', { async: false }),
  shelterClientFundingSources: DS.hasMany('shelterclientfundingsource', { async: false }),
  shelterClientIdentityPreferences: DS.hasMany('shelterclientidentitypreference', { async: false }),
  client: DS.belongsTo('client', { async: false })
});
