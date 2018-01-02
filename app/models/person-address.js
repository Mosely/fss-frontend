import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  isPrimary: DS.attr('boolean'),

  //relationships, if any
  personId: DS.belongsTo('person'),
  addressId: DS.belongsTo('address'),
  updatedBy: DS.belongsTo('person')
});
