const Koa = require('koa');
const app = new Koa();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("listening on port "+ port);