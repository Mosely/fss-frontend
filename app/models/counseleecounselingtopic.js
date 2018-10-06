import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  counseleeId: DS.attr("number"),
  otherNote: DS.attr("string"),
  counselingTopicId: DS.attr("number"),

  //relationships, if any
  counselee: DS.belongsTo("counselee", { async: false }),
  counselingTopic: DS.belongsTo("counselingtopic", { async: false }),
  updatedBy: DS.belongsTo("user", { async: false })
});
