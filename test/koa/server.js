/**
 * server
 * Author GuoBin201314@gmail.com on 10:41
 */
const KOA = require('./application');

const app = new KOA();

app.use( async ctx => {
  ctx.body = 'hello KOA'
});

// app.use((req, res) =>{
//   res.writeHead(200);
//   res.end('hello KOA');
// });

app.listen(9000, () =>{
  console.warn('server listen port 9000')
});
