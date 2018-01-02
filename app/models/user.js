import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  email: DS.attr('string'),
  isDisabled: DS.attr('boolean'),
  password: DS.attr('string'),
  password2: DS.attr('string'),
  passwordCreatedAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  username: DS.attr('string'),

  // Relationships
  updatedBy: DS.belongsTo('person')
});
