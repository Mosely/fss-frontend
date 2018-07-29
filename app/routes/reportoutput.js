import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
      return $.getJSON('http://nginx3.pantheon.local/reportoutput/' + params.id);
  }
});
