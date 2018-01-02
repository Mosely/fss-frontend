
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  topic: DS.attr('string'),
  description: DS.attr('string')

  //relationships, if any
  updatedBy: DS.belongsTo('person')
});
