const { Client } = require('pg');

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
	  		if(err) {
				console.log(err);
	  		} else {
	  			console.log("Table todos cleaned");
	  		}
	  		
	  	});
	},

	createTable: function() {
		var query = "CREATE TABLE todos (id SERIAL, json_data TEXT, todo_id VARCHAR (50) )";
		client.query(query,(err,res) => {
			if(err) {
				console.log(err);
	  		} else {
	  			console.log("Table todos created");
	  		}
				
		});
	},

	insertToDos: function(jsonData, todoId) {
		var query = "INSERT INTO todos (json_data, todo_id) VALUES ('"+jsonData+"', '"+todoId+"' )";
		client.query(query,(err,res) => {
			if(err) {
				console.log(err);
	  		} else {
	  			console.log("Todo id:"+todoId+" inserted to db");
	  		}
				
		});
	}
}