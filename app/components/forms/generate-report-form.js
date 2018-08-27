import Component from "@ember/component";
import { inject as service } from "@ember/service";
import RSVP from 'rsvp';

export default Component.extend({
  session: service("session"),
  store: service("store"),

  actions: {
    updateValue(value) {
      this.set("rtype", value);
    },

    generateReport() {
      let reportProps,
        reportCriteriaProps,
        report,
        column,
        columns,
        criteria,
        store = this.get("store");
      // getting the properites of reportProps and reportCriteriaProps
      reportProps = this.getProperties("name", "rtype");
      reportCriteriaProps = this.getProperties("relation", "criteriaValue");

      // create report record
      report = store.createRecord("report", reportProps);
      // store all the created records of reportcolumn
      columns = [
        store.createRecord("reportcolumn", {
          header: this.get("header1"),
          tableName: this.get("tableName1"),
          columnName: this.get("columnName1"),
          columnOrder: this.get("columnOrder1"),
          width: this.get("width1")
        }),
        store.createRecord("reportcolumn", {
          header: this.get("header2"),
          tableName: this.get("tableName2"),
          columnName: this.get("columnName2"),
          columnOrder: this.get("columnOrder2"),
          width: this.get("width2")
        }),
        store.createRecord("reportcolumn", {
          header: this.get("header3"),
          tableName: this.get("tableName3"),
          columnName: this.get("columnName3"),
          columnOrder: this.get("columnOrder3"),
          width: this.get("width3")
        })
      ];

      // map method to save each column and set results to columns
      RSVP.all(columns.products.map(column => column.save()).then((columns) => {
        report.set("reportcolumn", columns);
        //saving report before saving other records
        report.save().then(() => {
          let rid = parseInt(report.get("id"));
          // setting report_id to the saved report id
          columns.set("reportId", rid);
          criteria = store.createRecord("reportcriteria", reportCriteriaProps);
          // setting report_column_id to the saved column id
          criteria.set("reportColumnId", parseInt(columns.get("id")));
          return criteria.save().then(() => {
            this.get("router").transitionTo("dashboard");
          });
        });
      }));
      // RSVP.all(columns.map(column => column.save()).then((columns) => {
      //   report.set("reportcolumn", columns);
      //   report.save();
      //   console.log("Report ID " + report.get("id"));
      // }));
    }
  }
});
