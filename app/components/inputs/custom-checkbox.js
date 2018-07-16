import Component from '@ember/component';

export default Component.extend({
	tagName: 'div',
	classNames: ["form-check"],
	label: null,
	idValue: null,
	toggle: null,
	attributeBindings: ['data-toggle'],

	actions: {
		ifYesToggle(){
			let elemID = document.getElementById(event.target.id);
			console.log(elemID);
		}
	}
});
