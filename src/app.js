const path = require("path");
const views = require("koa-views");
const logger = require("koa-log");
const Kcola = require("kcola");
const config = require("./config");
const proxy = require("./middleware/proxy");
const auth = require("./middleware/auth");
// const store = require("./middleware/store");

const app = new Kcola(__dirname, config);

module.exports = () => {
  app.use(auth());
  app.use(views(path.join(__dirname, "./views"), { extension: "ejs" }));
  app.use(logger(process.env.NODE_ENV === "development" ? "dev" : "common"));
  app.use(proxy(config.proxy));
//   store(app, config.redis);
  return app;
};
