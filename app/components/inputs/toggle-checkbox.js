import Component from '@ember/component';

export default Component.extend({
	tagName: 'div',
	classNames: ["form-check"],
	label: null,
	idValue: null,
	attributeBindings: ['data-toggle'],

	actions: {
		ifYesToggle(){
			let checked = event.target.checked;
			let parentElem = document.getElementById(event.target.parentElement.id);
			let targetElem = document.getElementById(parentElem.dataset.toggle);
			if (checked == true && targetElem.classList.contains("hidden")) {
				targetElem.classList.remove("hidden");
				targetElem.classList.add("active");
			} else {
				targetElem.classList.remove("active");
				targetElem.classList.add("hidden");
			}
		}
	}
});
