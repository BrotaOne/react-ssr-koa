import Koa from 'koa';
import React,{createElement} from 'react';
const app = new Koa();
import { renderToString } from 'react-dom/server';
// import App from './src/index.tsx';
// const App = require('./src/index');
// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
const html = renderToString(createElement('div', null, 'Hello World2'));
//   ctx.body = 'Hello World';
  ctx.body = `
    <html>
    <head>
        <title>SSR</title>
    </head>
      <body>
          <p>${html}</p>
      </body>
    </html>
  `
});

app.listen(3000);