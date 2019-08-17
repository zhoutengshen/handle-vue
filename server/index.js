const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const devConfig = require("../build/webpack.dev.config");
const webpackCompiler = webpack(devConfig);
const app = express();
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));
app.listen(3000, () => {
    console.log(`listen：http://localhost:3000`);
})