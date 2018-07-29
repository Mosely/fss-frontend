import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any


  //relationships, if any
  shelterClient: DS.belongsTo('shelterclient', {inverse: null}),
  user: DS.belongsTo('user', {inverse: null}),
  updatedBy: DS.belongsTo('user', { async: false })
});