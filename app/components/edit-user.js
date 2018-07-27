import Component from '@ember/component';

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
