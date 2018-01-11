import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  schoolProblems: DS.attr('string'),
  longStandingIllnesses: DS.attr('string'),
  whoElseRaisedChild: DS.attr('string'),

  //relationships, if any
  school: DS.belongsTo('school'),
  updatedBy: DS.belongsTo('user'),
  counseleeChildBioParents: DS.hasMany('counselee-child-bio-parent'),
  counseleeChildGuardians: DS.hasMany('counselee-child-guardian'),
  counseleeChildSiblings: DS.hasMany('counselee-child-sibling'),
  counselee: DS.belongsTo('counselee')
});
