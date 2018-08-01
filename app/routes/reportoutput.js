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
        //xhrFields: {
        //    responseType: 'blob'
        //},
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
        },
        success: function(data, textStatus, request) {
            var filenameHeader = null;
            var filename = null;
            var filenameParts = null;
            var fileType = null;
            var resourceType = null;
            var a = null;
            var binaryData = [];
            var url = null;
            var binaryBlob = null;
            var filenameHeader = request.getResponseHeader('Content-Disposition');
            var filename = (filenameHeader !== null) ? filenameHeader.split("=")[1] : 'test.csv';
            var filenameParts = (filename !== null) ? filename.split(".") : null;
            var fileType = (filenameParts !== null) ? filenameParts[filenameParts.length - 1] : "csv";
            if(fileType == "csv") {
                resourceType = {"type": "text/csv;charset=utf8;"};
            } else if(fileType == "xls" || fileType == "xlsx") {
                resourceType = {"type": "application/vnd.ms-excel"};
            } else {
                resourceType = null;
            }
            
            a = document.createElement('a');
            binaryData.push(data);
            binaryBlob = (resourceType !== null) ? new Blob(binaryData, resourceType) : new Blob(binaryData);
            url = window.URL.createObjectURL(binaryBlob);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        }
     });
  }
});
