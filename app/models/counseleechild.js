import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  schoolProblems: DS.attr('string'),
  longStandingIllnesses: DS.attr('string'),
  whoElseRaisedChild: DS.attr('string'),

  //relationships, if any
  school: DS.belongsTo('school'),
  updatedBy: DS.belongsTo('user'),
  counseleeChildBioParents: DS.hasMany('counseleechildbioparent'),
  counseleeChildGuardians: DS.hasMany('counseleechildguardian'),
  counseleeChildSiblings: DS.hasMany('counseleechildsibling'),
  counselee: DS.belongsTo('counselee')
});
