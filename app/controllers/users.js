import Controller from "@ember/controller";
import EmberObject, { computed } from "@ember/object";
import { compare } from "@ember/utils";

export default Controller.extend({
  sortProperties: ["name"],
  sortAscending: true,
  arrangedContent: computed(
    "model",
    "sortProperties",
    "sortAscending",
    function() {
      return this.get("model")
        .toArray()
        .sort((a, b) => {
          let sortProperty = this.get("sortProperties")[0];
          let result;
          if (this.get("sortAscending")) {
            console.log("a " + a.get(sortProperty));
            console.log("b " + b.get(sortProperty));
            result = compare(a.get(sortProperty), b.get(sortProperty));
            console.log(result);
            return result;
          } else {
            result = compare(b.get(sortProperty), a.get(sortProperty));
            return result;
          }
        });
    }
  ),

  actions: {
    sortByColumn(props) {
      this.set("sortProperties", [props]);
      this.set("model", this.get("arrangedContent"));
      console.log(this.get("model"));
    },
    filterByName(param) {
      var store = this.get("store");
      if (param !== "") {
        return store.query("user", { username: param }).then(results => {
          return { query: param, results: results };
        });
      } else {
        return this.store.findAll("user").then(results => {
          return { query: param, results: results };
        });
      }
    }
  }
});
