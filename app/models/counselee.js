import DS from 'ember-data';

export default DS.Model.extend({
  //attributes, if any
  hasBeenAbused: DS.attr('boolean'),
  abusedByWhom: DS.attr('string'),
  abusedCount: DS.attr('number'),
  seriousProblemsInFamily: DS.attr('boolean'),
  seriousFamilyProblemsDesc: DS.attr('string'),
  alcoholProblem: DS.attr('boolean'),
  hadBlackOut: DS.attr('boolean'),
  blackOutLocation: DS.attr('string'),
  blackOutDate: DS.attr('date'),
  familyDrugAlcoholProblem: DS.attr('string'),
  familyDrugProblemOtherDetail: DS.attr('string'),
  currentHarmSelf: DS.attr('boolean'),
  pastHarmSelf: DS.attr('boolean'),
  currentHarmOthers: DS.attr('boolean'),
  pastHarmOthers: DS.attr('boolean'),
  currentHarmSelfExample: DS.attr('string'),
  pastHarmSelfExample: DS.attr('string'),
  currentHarmOthersExample: DS.attr('string'),
  pastHarmOthersExample: DS.attr('string'),
  hadPreviousCounseling: DS.attr('boolean'),
  previousCounselingWhere: DS.attr('string'),
  previousCounselingWhen: DS.attr('date'),
  currentlyInCounseling: DS.attr('boolean'),
  currentCounselor: DS.attr('string'),

  //relationships, if any
  updatedBy: DS.belongsTo('person'),
  counseleeCounselingTopics: DS.hasMany('counselee-counseling-topic'),
  counseleeDrugUses: DS.hasMany('counselee-drug-use'),
  counseleeMedications: DS.hasMany('counselee-medication')
});