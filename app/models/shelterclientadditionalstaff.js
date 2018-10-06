import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  shelterClientId: DS.attr("number"),
  userId: DS.attr("number"),

  //relationships, if any
  shelterClient: DS.belongsTo("shelterclient", { inverse: null }),
  user: DS.belongsTo("user", { inverse: null }),
  updatedBy: DS.belongsTo("user", { async: false })
});
