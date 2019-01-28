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
	  		console.log("todos cleaned");
	  	});
	},

	createTable: function() {
		var query = "CREATE TABLE todos (id VARCHAR (50), json_data TEXT, todo_id VARCHAR (50) )";
		client.query(query,(err,res) => {
				console.log("Table todos created");
		});
	}
}