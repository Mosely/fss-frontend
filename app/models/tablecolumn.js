import DS from "ember-data";

export default DS.Model.extend({
  //attributes, if any
  tableColumn: DS.attr("string"),
  tableId: DS.attr("number"),

  //relationships, if any
  table: DS.belongsTo("table", { async: false })
});
