import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://nginx3.pantheon.local'
});
