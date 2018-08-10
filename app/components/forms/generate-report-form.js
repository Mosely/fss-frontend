import Component from "@ember/component";
import { inject as service } from "@ember/service";
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  session: service("session"),
  store: service("store"),

  actions: {
    updateValue(value) {
      this.set("rtype", value);
    },

    generateReport() {
      let reportProps,
        reportColumnProps,
        reportCriteriaProps,
        store = this.get("store");
      reportProps = this.getProperties(
        "name",
        "rtype"
      );
      const report = store.createRecord('report', reportProps);

      const columns = [
  			store.createRecord('reportcolumn', {
  				header: this.get("header1"),
  				tableName: this.get("tableName1"),
  				columnName: this.get("columnName1"),
  				columnOrder: this.get("columnOrder1"),
  				width: this.get("width1"),
  			}),
  			store.createRecord('reportcolumn', {
          header: this.get("header2"),
  				tableName: this.get("tableName2"),
  				columnName: this.get("columnName2"),
  				columnOrder: this.get("columnOrder2"),
  				width: this.get("width2"),
  			}),
  			store.createRecord('reportcolumn', {
          header: this.get("header3"),
  				tableName: this.get("tableName3"),
  				columnName: this.get("columnName3"),
  				columnOrder: this.get("columnOrder3"),
  				width: this.get("width3"),
  			}),
  		];

      console.log(report);
      console.log(columns);
    }
  }
});
