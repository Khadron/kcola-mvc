const main = {
  secret: "khadron",
  historyMode: {
    rewrites: [],
    ignores: [/^\/$/, /\/token/, /\/download\/*/, /\/exports\/*/],
  },
  sessionTimeout: 60 * 1000, // 秒
  appConfigPath: "./appConfig.json",
  routeDir: "./route_config",
  controllerDir: "./controller",
  middlewareOpts: {},
};

if (process.env.NODE_ENV === "production") {
  const prod = require("./prod");
  Object.assign(main, prod);
} else if (process.env.NODE_ENV === "test") {
  const test = require("./test");
  Object.assign(main, test);
} else if (process.env.NODE_ENV === "development") {
  const dev = require("./dev");
  Object.assign(main, dev);
} else {
  const local = require("./local");
  Object.assign(main, local);
}

module.exports = main;
