
var request = require('request');

module.exports = {
	getToDos: function() {
		var url = 'https://jsonplaceholder.typicode.com/todos';
		request.get({
		    url: url,
		    json: true,
		    headers: {'User-Agent': 'request'}
		  }, (err, res, data) => {
		    if (err) {
		      console.log('Error:', err);
		    } else if (res.statusCode !== 200) {
		      console.log('Status:', res.statusCode);
		    } else {
		      // data is already parsed as JSON:
		      console.log(data);
		      
		    }
		});
	}
}