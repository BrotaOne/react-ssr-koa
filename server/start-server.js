const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static')
const mount = require('koa-mount')
const app = new Koa();
const { renderToString } = require('react-dom/server');

const ServerApp = require('../dist/serverBundle.js').default;
const serverHtml = renderToString(ServerApp);
const html = fs.readFileSync(
  path.join(__dirname, '../dist/index.html'),
  'utf-8'
);

app.use(
  mount(
    '/public',
    serve(path.join(__dirname, '../dist'))
  )
);

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async ctx => {
  ctx.body = html.replace('<!-- app -->', serverHtml);
});

app.listen(3000);