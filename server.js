const Koa = require('koa');
const app = new Koa();

var dbTools = require('./db');
var dataTools = require('./data');


app.use(async ctx => {
  dbTools.cleanTable();	
  dbTools.createTable();

  dataTools.getToDos(function(todos) {
  	todos.forEach(function(todo) {
		dataTools.getUserName(todo.userId, function(userName) {
			var todoId = userName+"-"+todo.id;
			var todoData = JSON.stringify(todo);
			//console.log(todoData);
			dbTools.insertToDos(todoData,todoId);
		});
			//console.log(todo);
	});
  });
  
  

  ctx.body = 'ToDos populated as per specifications';
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Application started listening on port "+ port);