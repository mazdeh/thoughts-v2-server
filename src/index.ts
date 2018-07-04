import * as restify from 'restify';

const server = restify.createServer({
  name: 'thoughts-server',
  version: 'alpha',
});

server.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.get('/hello', (req, res, next) => {
  res.send(200, 'hello world');
  next();
});

server.listen(8080, () => {
  console.log(`listening ${server.name}, ${server.url}`);
});
