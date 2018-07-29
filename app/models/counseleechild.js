import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  schoolProblems: DS.attr('string'),
  longStandingIllnesses: DS.attr('string'),
  whoElseRaisedChild: DS.attr('string'),

  //relationships, if any
  school: DS.belongsTo('school', { async: false }),
  updatedBy: DS.belongsTo('user', { async: false }),
  counseleeChildBioParents: DS.hasMany('counseleechildbioparent', { async: false }),
  counseleeChildGuardians: DS.hasMany('counseleechildguardian', { async: false }),
  counseleeChildSiblings: DS.hasMany('counseleechildsibling', { async: false }),
  counselee: DS.belongsTo('counselee', { async: false })
});
