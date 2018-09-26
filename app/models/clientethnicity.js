import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  clientId: DS.attr("number"),
  ethnicityId: DS.attr("number"),

  //relationships, if any
  client: DS.belongsTo("client", { async: false }),
  ethnicity: DS.belongsTo("ethnicity", { async: false }),
  updatedBy: DS.belongsTo("user", { async: false })
});
