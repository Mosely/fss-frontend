import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('branchofservice', 'branchesofservice');
inflector.irregular('counseleechild', 'counseleechildren');
inflector.irregular('ethnicity', 'ethnicities');
inflector.irregular('clientethnicity', 'clientethnicities');
inflector.irregular('person', 'people');

inflector.uncountable('shelterclientadditionalstaff');
inflector.uncountable('citydata');
inflector.uncountable('countydata');
inflector.uncountable('statedata');
inflector.uncountable('reportcriteria');

// Modules must have an export, so we just export an empty object here
export default {};
