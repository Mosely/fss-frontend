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
  branchOfService: DS.belongsTo('branchofservice', { async: false }),
  militaryDischargeType: DS.belongsTo('militarydischargetype', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false }),
  client: DS.belongsTo('client', { async: false })
});
