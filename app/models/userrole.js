import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  user: DS.belongsTo('user', {inverse: null}),
  role: DS.belongsTo('role', {inverse: null}),
  updatedBy: DS.belongsTo('user')
});