const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Default middlewares (no static files)
const middlewares = jsonServer.defaults({
  logger: true,   // Log all requests
  noCors: false,  // Enable CORS
  noGzip: false   // Enable Gzip compression
});

const port = process.env.PORT || 5000;

// Apply middlewares
server.use(middlewares);

// Use JSON Server router
server.use(router);

// Start the server
server.listen(port, '0.0.0.0', () => {
  console.log(`✅ JSON Server is running on port ${port}`);
  console.log(`✅ API available at: http://localhost:${port}`);
  console.log(`✅ Properties endpoint: http://localhost:${port}/properties`);
});
