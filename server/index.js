const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const devConfig = require("../build/webpack.dev.config");
const webpackCompiler = webpack(devConfig);
const app = express();
app.use(webpackDevMiddleware(webpackCompiler, {
    logLevel: "error",
}));
app.use(webpackHotMiddleware(webpackCompiler, {
    noInfo: true
}));
app.listen(3000, () => {
    console.log(`listen：http://localhost:3000`);
});