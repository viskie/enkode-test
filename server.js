const Koa = require('koa');
const app = new Koa();

var dbTools = require('./db');


app.use(async ctx => {
  dbTools.cleanTable();	
  dbTools.createTable();
  ctx.body = 'Hello World';
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Application started listening on port "+ port);