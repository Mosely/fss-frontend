import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import config from '../config/environment';

export default Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    let { access_token } = this.get('session.data.authenticated');
    let host = `${config.host}`;
    return $.ajax({
       // url:'http://nginx3.pantheon.local/reportoutput/' + params.id, 
       url: host + '/reportoutput/' + params.id, 
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
        },
        success: function(data, textStatus, request) {
            var filenameHeader = request.getResponseHeader('Content-Disposition');
            //alert(filenameHeader);
            var filename = filenameHeader.split("=")[1] || 'test.csv';
            //var filename = "test.csv";
            //alert(filename);
            var filenameParts = filename.split(".");
            var fileType = filenameParts[filenameParts.length - 1] || "csv";
            var resourceType = null;
            if(fileType == "csv") {
                resourceType = {"type": "text/csv;charset=utf8;"};
            }
            var a = document.createElement('a');
            var binaryData = [];
            binaryData.push(data);
            var url = window.URL.createObjectURL(new Blob(binaryData, resourceType));
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        }
     });
  }
});
