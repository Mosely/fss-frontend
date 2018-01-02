
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  socialSecurityNumber: DS.attr('number'),
  placeOfEmployment: DS.attr('string'),
  isServiceMemberOrVeteran: DS.attr('boolean'),
  hasFamilyWhoIsServiceMemberOrVeteran: DS.attr('boolean'),
  isReferredByVeteranResourceCenter: DS.attr('boolean'),
  referral: DS.attr('string')

  //relationships, if any
  updatedBy: DS.belongsTo('person')
});
