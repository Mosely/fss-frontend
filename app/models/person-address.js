import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  isPrimary: DS.attr('boolean'),

  //relationships, if any
  person: DS.belongsTo('person'),
  address: DS.belongsTo('address'),
  updatedBy: DS.belongsTo('person')
});