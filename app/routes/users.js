import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  // NOTE: May ahve to deserialize the returned date for it to display
    model() {
      return this.store.findAll('user', { include: 'person' });
    }
  });
