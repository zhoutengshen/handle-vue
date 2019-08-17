const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const merge = require("webpack-merge");
const openBrowerWebackPlugin = require("open-browser-webpack-plugin");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config").config;
const resolve = filename => path.resolve(__dirname, filename);
const devConfig = {
    entry: {
        hmr: 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000?reload=true',
        app: resolve("../src/client.js"),
    },
    output: {
        filename: "[name].bundle.[hash].js",//bundle文件的名字
        path: resolve("../dist"),//打包文件放置位置
        publicPath: "",//打包文件html里面静态文件的前缀
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve("../public/template.html"),//模板所在位置
            filename: resolve("../dist/index.html"),//指定编译到的文件位置
        }),
        new CleanWebpackPlugin(),
        new openBrowerWebackPlugin({ url: "http://localhost:3000" }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig);