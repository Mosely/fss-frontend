import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    let { access_token } = this.get('session.data.authenticated');
    return $.ajax({
        url:'http://nginx3.pantheon.local/reportoutput/' + params.id, 
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
        },
        success: function(data, textStatus, request) {
            var filenameHeader = request.getResponseHeader('Content-Disposition');
            var filename = filenameHeader.split("=")[1];
            alert(filename);
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        }
     });
  }
});
