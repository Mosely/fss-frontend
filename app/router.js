import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.route('login');
  this.route('users');
  this.route('add-user');
  this.route('user-profile');
});

export default Router;
