import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  socialSecurityNumber: DS.attr("number"),
  placeOfEmployment: DS.attr("string"),
  isServiceMemberOrVeteran: DS.attr("boolean"),
  hasFamilyWhoIsServiceMemberOrVeteran: DS.attr("boolean"),
  isReferredByVeteranResourceCenter: DS.attr("boolean"),
  referral: DS.attr("string"),
  clientEthnicityId: DS.attr("number"),

  //relationships, if any
  updatedBy: DS.belongsTo("user", { async: false }),
  clientEthnicities: DS.hasMany("clientethnicity", { async: false }),
  clientLanguages: DS.hasMany("clientlanguage", { async: false }),
  person: DS.belongsTo("person", { async: false })
});
