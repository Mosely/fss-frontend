import Component from '@ember/component';

export default Component.extend({
	tagName: "div",
  classNames: ["form-check"],
	idValue: null,
	checked: false,
	values: [],

	actions: {
		updateValue(value) {
			this.get("values").push(this.get("checked"));
			console.log(value);
			console.log(this.get("checked"));
			console.log(this.get("values"));
		}
	}
});
