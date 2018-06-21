import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Ember from 'ember';
// sets up Ember.Inflector
import './models/custom-inflector-rules';

const App = Application.extend({
  LOG_TRANSITIONS_INTERNAL:  true,
  LOG_ACTIVE_GENERATION:     true,
  LOG_VIEW_LOOKUPS:          true,
  LOG_RESOLVER:              true,
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Ember.run.backburner.DEBUG            = true;
Ember.ENV.RAISE_ON_DEPRECATION        = true;
Ember.LOG_STACKTRACE_ON_DEPRECATION   = true;
Ember.LOG_BINDINGS                    = true;
Ember.RSVP.on('error', function(error) {
  Ember.Logger.assert(false, error);
});

loadInitializers(App, config.modulePrefix);

export default App;
