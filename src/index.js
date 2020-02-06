import server from './server';

// import http from 'http';
// import express from 'express';
// import bodyparser from 'body-parser';
// import errorHandler from './errors/index';
// import APIError from './errors/APIError';
// import rootRouter from './routers';
// import config from './config/index';
// import { logger } from './utils/logger';

// const app = express();
// app.use(bodyparser.json());
// app.use(rootRouter);
// app.use((_, __, next) =>
//   next(new APIError(404, 'Not found', 'Endpoint not found'))
// );
// app.use(errorHandler);
// const server = http.createServer(app);
// server.listen(config.port, () =>
//   logger.info(`Server is listening on port ${config.port}`)
// );

server();
