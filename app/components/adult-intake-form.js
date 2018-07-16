import Component from '@ember/component';

export default Component.extend({
	actions: {
		ifYesToggle(){
			let elemID = document.getElementById(event.target.id);
			console.table(elemID);
			console.log(elemID.dataset.id);
			// if (targetItem.classList.contains("hidden")) {
			// 	targetItem.classList.remove("hidden");
			// }
		}
	}
});
