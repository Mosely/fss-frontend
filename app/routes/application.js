import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    error(error) {
      const location = window.location;

      // Authentication expired or is bad
      if (error.status === 401) {
        location.replace(`${location.protocol}//${location.host}/login.php`);
      }
    }
  }
});
