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
  branchOfServiceId: DS.belongsTo('branch-of-service'),
  militaryDischargeTypeId: DS.belongsTo('military-discharge-type'),
  updatedBy: DS.belongsTo('person')
});
