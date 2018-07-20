import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service('session'),

  /**
   * Will toggle the elems class list to the classes it recieves
   *
   * @param {} elem The element in which to toggle the classes to
   * @param {string} classes The classes to be toggled
  **/
  toggleClasses(elem, classes) {
    let elemClassList = elem.classList;
    let classList = new Set(elem.classList);
    let newClasses = elem.toString(classes) ? classes.split(" ") : classes;

    for(let className of newClasses) {
      if (classList.has(className)) {
        elemClassList.remove(className);
      } else {
        elemClassList.add(className);
      }
    }
  },

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    /**
     * Utilizes the toggleClasses() function to display or hide the sidebar
     *
    **/
    handleSidebar() {
      let page, sidebar = document.getElementById('sidebar');
      page = document.getElementById('allWrapper');
      this.toggleClasses(sidebar, 'toggled');
    }
  }
});
