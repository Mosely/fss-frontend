import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  name: DS.attr('string'),
  description: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('user'),
  shelterClientFundingSources: DS.hasMany('shelter-client-funding-source')
});