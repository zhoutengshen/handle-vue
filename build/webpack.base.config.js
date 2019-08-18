/**
 * @type {import('webpack').Configuration} 
 */
const isProd = process.env.NODE_ENV === "production";
const path = require("path");
const resolve = filename => path.resolve(__dirname, filename);
const config = {
    devtool: isProd ? "" : "source-map",
    mode: isProd ? "production" : "development",
    resolve: {
        alias: {
            "@": resolve("../src")
        },
        extensions: [".js", ".vue", ".ts"]
    },
}
module.exports = {
    config
}