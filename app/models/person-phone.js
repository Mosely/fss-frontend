
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  isPrimary: DS.attr('boolean'),
  canCall: DS.attr('boolean')

  //relationships, if any
  personId: DS.belongsTo('person'),
  phoneId: DS.belongsTo('phone'),
  updatedBy: DS.belongsTo('person')
});
