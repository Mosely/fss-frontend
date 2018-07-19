import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			var store = this.get('store');
			if (param !== '') {
				console.log("Getting ready to run the user query.");
				let records = store.query('user', { username: param });
				records.then((recordsArray) => {
					if(records.data.length == 1) {
						recordsArray.data[0] = records.data;
						return recordsArray;
					} else {
						return records;
					}
				});
				//return { data: [ store.query('user', { username: param }).data, {} ] };
			} else {
				return this.store.findAll('user');
			}
		}
	}
});
