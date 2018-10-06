import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  counseleeId: DS.attr("number"),
  drugUseId: DS.attr("number"),
  ageWhenFirstUsed: DS.attr("number"),

  //relationships, if any
  counselee: DS.belongsTo("counselee", { async: false }),
  drugUse: DS.belongsTo("druguse", { async: false }),
  updatedBy: DS.belongsTo("user", { async: false })
});
