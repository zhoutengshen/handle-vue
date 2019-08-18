/**
 * @type {import('webpack').Configuration} 
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const openBrowerWebackPlugin = require("open-browser-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config").config;
const resolve = filename => path.resolve(__dirname, filename);
const isAnalyzser = process.env.analyzser;
const devConfig = {
    entry: {
        app: [resolve("../src/client.js"), "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000?reload=true"]
    },
    output: {
        filename: "[name].bundle.[hash].js",//bundle文件的名字
        path: resolve("../dist"),//打包文件放置位置
        publicPath: "",//打包文件html里面静态文件的前缀
    },
    watchOptions: {
        ignored: /node_modules/,
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
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        // hotReload: false // 关闭热重载
                    }
                },

            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /.css$/,
                use: [{
                    loader: "vue-style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "less-loader",
                    {
                        loader: "style-resources-loader",
                        options: {
                            patterns: [resolve("../src/styles/common.less")]
                        }
                    }
                ]
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
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
};
if (isAnalyzser) {
    devConfig.plugins.push(new WebpackBundleAnalyzer())
}

module.exports = merge(baseConfig, devConfig);