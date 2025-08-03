const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: false, // Disable static file serving
  noCors: false,
  noGzip: false,
  logger: true
});

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${port}`);
  console.log(`API available at: http://localhost:${port}`);
  console.log(`Properties endpoint: http://localhost:${port}/properties`);
}); 