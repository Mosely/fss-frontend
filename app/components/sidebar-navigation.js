import Component from '@ember/component';
import Ember from 'ember';

const { service } = Ember.inject;

export default Component.extend({
  session: service('session'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
