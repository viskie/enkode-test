const Koa = require('koa');
const app = new Koa();


app.use(async ctx => {
  ctx.body = 'Hello World';
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("listening on port "+ port);