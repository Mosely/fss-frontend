import Component from '@ember/component';

export default Component.extend({
	currentItem: 0,

	showItem(num) {
		let item = document.querySelectorAll('.form-step--item');
		//take the param and add block display to the specified item
		item[num].classList.remove('hidden');
		item[num].classList.add('active');
	},

	actions: {
		nextPrev(x) {
			let item = document.querySelectorAll('.form-step--item');
			//make the current item display none
			item[this.currentItem].classList.add('hidden');
			item[this.currentItem].classList.remove('active');
			// increase item index by one
			this.currentItem += 1;

			if (this.currentItem >= item.length) {
				return false;
			}
			return this.showItem(this.currentItem);
		},
	}

});
