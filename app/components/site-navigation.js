import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
