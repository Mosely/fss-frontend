
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  zip: DS.attr('number'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  county: DS.attr('string')

  //relationships, if any
  city: DS.belongsTo('c'),
  stateCode: DS.belongsTo('state-c'),
  updatedBy: DS.belongsTo('person')
});
