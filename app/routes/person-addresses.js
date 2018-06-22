import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
   model() {
    let store = this.store;
    return store.findAll('personaddress').then(function(primaryModels){
      // Modify the following to pull in any related models as needed
      //primaryModels.forEach(primaryModel => {
      //  store.findRecord('REPLACEWITHRELATEDMODEL', primaryModel.id).then(function(secondaryModel) {
      //    primaryModel.set('REPLACEWITHRELATEDMODEL', secondaryModel);
      //  });
      //});
      return primaryModels;
    });
   }
});
