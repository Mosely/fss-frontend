import Component from '@ember/component';

export default Component.extend({
	currentItem: 0,

	showItem(num) {
		let item = document.querySelectorAll('.form-step--item');
		let next = document.getElementById("next");
		let previous = document.getElementById("prev");
		//take the param and add block display to the specified item
		item[num].classList.remove('hidden');
		item[num].classList.add('active');
		// display or hide the previous button
		if (num == 0) {
			previous.style.display = "none";
		} else {
			previous.style.display = "inline-block";
		}
		if (num == (item.length -1) ) {
			next.innerHTML = "Submit";
		} else {
			next.innerHTML = "Next";
		}
	},

	actions: {
		nextPrev(x) {
			let item = document.querySelectorAll('.form-step--item');
			let form = document.getElementById('form');
			//make the current item display none
			item[this.currentItem].classList.add('hidden');
			item[this.currentItem].classList.remove('active');
			// increase item index by one
			this.currentItem += x;

			if (this.currentItem >= item.length) {

				return false;
			}
			return this.showItem(this.currentItem);
		},
	}

});
