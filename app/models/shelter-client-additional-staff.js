
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClientId: DS.belongsTo('shelter-client'),
  userId: DS.belongsTo('user'),
  updatedBy: DS.belongsTo('person')
});
