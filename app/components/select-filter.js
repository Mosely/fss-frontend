import Component from "@ember/component";

export default Component.extend({
  classNames: ["list-filter"],
  value: "",

  /**
   * Initial hook displaying items calling the filter action with an empty
   * value.
   **/
  init() {
    this._super(...arguments);
    //send initial listings calling filter action with an empty value
    // this.get("filter")("").then(results => this.set("results", results));
    this.get('filter')('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    /**
     * Applies the search term filter to the list of users/patients.
     * Passing 'results' to the {{yield}}
     **/
    handleFilter() {
      let filterInputValue = this.get("value");
      let filterAction = this.get("filter");
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query == this.get('value')) {
          this.set("results", filterResults.results);
        }
      });
    },
		handleInput() {
			console.log(even.target.classList);
		}
  }
});
