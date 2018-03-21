import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    error(error) {
      const location = window.location;

      // Authentication expired or is bad
      if (error.status === 401) {
        location.replace(`${location.protocol}//${location.host}/login.php`);
      }
    }
  }
});
