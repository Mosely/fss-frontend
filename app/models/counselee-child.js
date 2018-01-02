
import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  schoolProblems: DS.attr('string'),
  longStandingIllnesses: DS.attr('string'),
  whoElseRaisedChild: DS.attr('string')

  //relationships, if any
  schoolId: DS.belongsTo('school'),
  updatedBy: DS.belongsTo('person')
});
