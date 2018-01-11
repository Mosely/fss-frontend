import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  referredBy: DS.attr('string'),
  hasDd214: DS.attr('boolean'),
  isRegisteredWithVa: DS.attr('boolean'),
  vaId: DS.attr('number'),
  jobTitle: DS.attr('string'),
  isOnDisability: DS.attr('boolean'),
  isHomeless: DS.attr('boolean'),
  householdIncome: DS.attr('number'),

  //relationships, if any
  branchOfService: DS.belongsTo('branch-of-service'),
  militaryDischargeType: DS.belongsTo('military-discharge-type'),
  updatedBy: DS.belongsTo('user'),
  client: DS.belongsTo('client')
});
