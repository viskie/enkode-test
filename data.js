
var request = require('request');

module.exports = {
	getToDos: function(callback) {
		var url = 'https://jsonplaceholder.typicode.com/todos';
		request.get({
		    url: url,
		    json: true,
		    headers: {'User-Agent': 'request'}
		  }, (err, res, data) => {
		    if (err) {
		      console.log('Error:', err);
		      return null;
		    } else if (res.statusCode !== 200) {
		      console.log('Status:', res.statusCode);
		      return null;
		    } else {
		      callback(data);
		    }
		});
	},

	getUserName: function(userId, callback) {
		var url = 'https://jsonplaceholder.typicode.com/users/'+userId;
		request.get({
		    url: url,
		    json: true,
		    headers: {'User-Agent': 'request'}
		  }, (err, res, data) => {
		    if (err) {
		      console.log('Error:', err);
		      return null;
		    } else if (res.statusCode !== 200) {
		      console.log('Status:', res.statusCode);
		      return null;
		    } else {
		      callback(data.username);
		    }
		});
	}
}