import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			var store = this.get('store');
			if (param !== '') {
				
				let records = store.query('user', { username: param });
				records.then((recordsArray) => {
					console.log("recordsArray.data.length = " + recordsArray.data.length);
					if(recordsArray.data.length == 1) {
						recordsArray.data[0] = recordsArray.data;
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
