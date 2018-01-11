import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  user: DS.belongsTo('user'),
  role: DS.belongsTo('role'),
  updatedBy: DS.belongsTo('user')
});