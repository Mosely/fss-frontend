
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  userId: DS.belongsTo('user'),
  roleId: DS.belongsTo('role'),
  updatedBy: DS.belongsTo('person')
});
