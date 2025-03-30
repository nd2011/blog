const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
  // Route


  app.use('/news', newsRouter);
  // Route courses
  app.use('/courses', coursesRouter);
  // Route me
  app.use('/me', meRouter);
  // Route site
  app.use('/', siteRouter);
}

module.exports = route;
