import Ember from "ember";
import DS from "ember-data";

var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  //export default DS.JSONSerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  }
});
