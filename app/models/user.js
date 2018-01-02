import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr('date'),
  email: DS.attr('string'),
  id: DS.attr('number'),
  is_disabled: DS.attr('boolean'),
  password: DS.attr('string'),
  password2: DS.attr('string'),
  password_created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  updated_by: DS.attr('number'),
  username: DS.attr('string')
});
