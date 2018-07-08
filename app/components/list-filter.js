import Component from "@ember/component";

export default Component.extend({
  classNames: ["list-filter"],
  value: "",

  init() {
    this._super(...arguments);
    //send initial listings calling filter action with an empty value
    this.get("filter")("").then(results => this.set("results", results));
  },

  actions: {
    handleFilter() {
      let filterInputValue = this.get("value");
      let filterAction = this.get("filter");
      filterAction(filterInputValue).then(filterResults =>
        this.set("results", filterResults)
      );
    }
  }
});
