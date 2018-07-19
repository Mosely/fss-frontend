import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		filterByName(param) {
			var store = this.get('store');
			if (param !== '') {
				
				let records = store.query('user', { username: param }).then((recordsArray) => {
					if(recordsArray.data.length == 1) {
						recordsArray.data[0] = recordsArray.data;
						recordsArray.data[1] = null;
						return recordsArray;
					} else {
						return recordsArray;
					}
				});
				console.log("records.length = " + records.length);
				return records;
				//return { data: [ store.query('user', { username: param }).data, {} ] };
			} else {
				return this.store.findAll('user');
			}
		}
	}
});
