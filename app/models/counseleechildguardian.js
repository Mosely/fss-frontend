import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  counseleeChildId: DS.attr("number"),
  name: DS.attr("string"),
  age: DS.attr("number"),
  occupation: DS.attr("string"),
  isCurrentlyLivingWithChild: DS.attr("boolean"),
  dateFirstLivedWithChild: DS.attr("date"),

  //relationships, if any
  counseleeChild: DS.belongsTo("counseleechild", { async: false }),
  updatedBy: DS.belongsTo("user", { async: false })
});
