import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  isPrimary: DS.attr('boolean'),
  otherNote: DS.attr('string'),

  //relationships, if any
  client: DS.belongsTo('client', { async: false }),
  language: DS.belongsTo('language', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false })
});