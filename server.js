const Koa = require('koa');
const PgClient = require('pg');

const app = new Koa();

const pgClient = new PgClient({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

pgClient.connect();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("listening on port "+ port);