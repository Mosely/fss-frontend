import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  personId: DS.attr("number"),
  phoneId: DS.attr("number"),
  isPrimary: DS.attr("boolean"),
  canCall: DS.attr("boolean"),

  //relationships, if any
  person: DS.belongsTo("person", { async: false }),
  phone: DS.belongsTo("phone", { async: false }),
  updatedBy: DS.belongsTo("user", { async: false })
});
