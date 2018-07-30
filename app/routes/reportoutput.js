import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    let { access_token } = this.get('session.data.authenticated');
    return $.ajax({
        url:'http://nginx3.pantheon.local/reportoutput/' + params.id, 
        method: 'GET',
        dataType: 'binary',
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
        },
        success: function(data){
          // just do nothing.
        }
     });
  }
});
