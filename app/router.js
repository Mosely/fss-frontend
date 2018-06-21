import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('login');
  this.route('dashboard', { path: '/' });
  this.route('users');
  this.route('user', { path: '/users/:id' });
  this.route('people');
  this.route('person', { path: '/people/:id' });
  this.route('add-user');
  this.route('user-profile');
  this.route('adult-intake');
  this.route('address', { path: '/addresses/:id' });
  this.route('branch-of-service', { path: '/branchesofservice/:id' });
  this.route('city-data', { path: '/citydata/:id' });
  this.route('city-data-extended', { path: '/citydataextended/:id' });
  this.route('client', { path: '/clients/:id' });
  this.route('client-ethnicity', { path: '/clientethnicities/:id' });
  this.route('client-language', { path: '/clientlanguages/:id' });
  this.route('counselee', { path: '/counselees/:id' });
  this.route('counselee-child', { path: '/counseleechildren/:id' });
  this.route('counselee-child-bio-parent', { path: '/counseleechildbioparents/:id' });
  this.route('counselee-child-guardian', { path: '/counseleechildguardians/:id' });
  this.route('counselee-child-sibling', { path: '/counseleechildsiblings/:id' });
  this.route('counselee-counseling-topic', { path: '/counseleecounselingtopics/:id' });
  this.route('counselee-drug-use', { path: '/counseleedruguses/:id' });
  this.route('counselee-medication', { path: '/counseleemedications/:id' });
  this.route('counseling-topic', { path: '/counselingtopics/:id' });
  this.route('county-data', { path: '/countydata/:id' });
  this.route('drug-use', { path: '/druguses/:id' });
  this.route('ethnicity', { path: '/ethnicities/:id' });
  this.route('funding-source', { path: '/fundingsources/:id' });
  this.route('gender', { path: '/genders/:id' });
  this.route('identity-preference', { path: '/identitypreferences/:id' });
  this.route('language', { path: '/languages/:id' });
  this.route('medication', { path: '/medications/:id' });
  this.route('military-discharge-type', { path: '/militarydischargetypes/:id' });
  this.route('person-address', { path: '/personaddresses/:id' });
  this.route('person-phone', { path: '/personphones/:id' });
  this.route('phone', { path: '/phones/:id' });
  this.route('report', { path: '/reports/:id' });
  this.route('report-column', { path: '/reportcolumns/:id' });
  this.route('report-criteria', { path: '/reportcriterias/:id' });
  this.route('role', { path: '/roles/:id' });
  this.route('role-table-access', { path: '/roletableaccesses/:id' });
  this.route('school', { path: '/schools/:id' });
  this.route('shelter-client', { path: '/shelterclients/:id' });
  this.route('shelter-client-additional-staff', { path: '/shelterclientadditionalstaff/:id' });
  this.route('shelter-client-funding-source', { path: '/shelterclientfundingsources/:id' });
  this.route('shelter-client-identity-preference', { path: '/shelterclientidentitypreferences/:id' });
  this.route('state-data', { path: '/statedata/:id' });
  this.route('user-role', { path: '/userroles/:id' });
  this.route('user-view', { path: '/userviews/:id' });
  this.route('veteran', { path: '/veterans/:id' });
});

export default Router;
