const { Client } = require('pg');
const http = require('http');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();
console.log("DB connection Initialized!");


module.exports = {
	cleanTable: function() {
	  	var query = "DROP TABLE IF EXISTS todos";
	  	client.query(query, (err, res) => {
	  		console.log(res);
	  		console.log("todos cleaned");
	  	});
	}
}