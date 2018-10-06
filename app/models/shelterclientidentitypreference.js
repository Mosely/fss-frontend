import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  shelterClientId: DS.attr("number"),
  identityPreferenceId: DS.attr("number"),

  //relationships, if any
  shelterClient: DS.belongsTo("shelterclient", { async: false }),
  identityPreference: DS.belongsTo("identitypreference", { async: false }),
  updatedBy: DS.belongsTo("user", { async: false })
});
