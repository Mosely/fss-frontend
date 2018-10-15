import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service("store"),
  tagName: "div",
  classNames: ["form-check", "inline-block"],
  label: null,
  idValue: null,
  groupValue: null,
  attributeBindings: ["data-toggle"],

  actions: {
    // ifYesToggle(value) {
    //   let store = this.get("store");
    //   let parentElem = document.getElementById(event.target.parentElement.id);
    //   let targetElem = document.getElementById(parentElem.dataset.toggle);
    //   console.log(this.get("groupValue"));
    //   console.log(value);
    //   console.log(this);
    //   this.set(`${this.get("groupValue")}`, value);
    //   if (value == "true" && targetElem.classList.contains("hidden")) {
    //     targetElem.classList.remove("hidden");
    //     targetElem.classList.add("active");
    //   } else {
    //     targetElem.classList.remove("active");
    //     targetElem.classList.add("hidden");
    //   }
    // }
  }
});
