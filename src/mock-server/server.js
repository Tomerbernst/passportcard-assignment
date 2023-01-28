const jsonServer = require('json-server');
const apiKeyMiddleware = require('./api-key-middleware');
const server = jsonServer.create();
const router = jsonServer.router('json-server-db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(apiKeyMiddleware);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
