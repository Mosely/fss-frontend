import Component from '@ember/component';

export default Component.extend({
	classNames: ["search-filter"],
  value: "",

	/**
   * Initial hook displaying items calling the filter action with an empty
   * value.
   **/
  init() {
    this._super(...arguments);
    //send initial listings calling filter action with an empty value
    // this.get("filter")("").then(results => this.set("results", results));
    // this.get('filter')('').then((allResults) => {
    //   this.set('results', "");
    // });
  },

	actions: {
    /**
     * Applies the search term filter to the list of users/patients.
     * Passing 'results' to the {{yield}}
     **/
    handleFilter() {
      let filterInputValue = this.get("value");
      let filterAction = this.get("filter");
			if (filterInputValue == "") {
				document.querySelector('.filtered-search__results').classList.add("hidden");
				// filterAction("").then((filterResults) => {
	      //   if (filterResults.query == this.get('value')) {
	      //     this.set("results", "");
	      //   }
	      // });
			} else {
				document.querySelector('.filtered-search__results').classList.remove("hidden");
				filterAction(filterInputValue).then((filterResults) => {
	        if (filterResults.query == this.get('value')) {
	          this.set("results", filterResults.results);
	        }
	      });
			}
    }
  }
});
