import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
    store: service("store"),
    actions: {
        update() {
            //let store = this.get('store');
            let user = this.get('user');
            user.save();
        }
    }
});
