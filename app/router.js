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
});

export default Router;
