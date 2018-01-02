
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  type: DS.attr('string')

  //relationships, if any
  updatedBy: DS.belongsTo('person')
});
