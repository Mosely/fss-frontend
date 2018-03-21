import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    },
    moveLabel() {
      //variables for the username and password field to animate the label
      var unLabel = this.$(".username-label");
      var unVal = this.$("#identification").val();
      var pwLabel = this.$(".password-label");
      var pwVal = this.$("#password").val();

      if (unVal != "") {
        unLabel.addClass("focused");
      } else {
        unLabel.removeClass("focused");
      }
      if (pwVal != "") {
        pwLabel.addClass("focused");
      } else {
        pwLabel.removeClass("focused");
      }
    }
  }
});
