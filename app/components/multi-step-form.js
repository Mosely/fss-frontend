import Component from '@ember/component';

export default Component.extend({

	actions: {

		showItem(num) {
			let item = document.querySelectorAll('.form-step--item');
			//take the param and add block display to the specified item
			item[num].classList.add('active');
		},

		nextPrev() {
			let currentItem = 0;
			let item = document.querySelectorAll('.form-step--item');
			//make the current item display none
			item[currentItem].classList.add('hidden');
			item[currentItem].classList.remove('active');
			// increase item index by one
			currentItem = currentItem + 1;

			if (currentItem >= item.length) {
				return false;
			}
		},
	}

});
