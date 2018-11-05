const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

var isProduction = (process.env.NODE_ENV == "production");

var basePlugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new MonacoWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "index.html",
        filename: "index.html",
    })
];
var developmentPlugins = [
   
];
var productionPlugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({ "process.env": { "NODE_ENV": JSON.stringify("production") } }),
];


var plugins = (isProduction) ? basePlugins.concat(productionPlugins) : basePlugins.concat(developmentPlugins);

let entry = (isProduction) ?  { 
    "InfoveaveFileParser" : "./index.ts"
} : {
    "parser" : "./index.ts",
    "ui": "./ui.tsx",  
};


module.exports = {
    mode : "production",
    entry: entry,
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    optimization: {
        noEmitOnErrors: true,
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: false // set to true if you want JS source maps
            }),
          ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "./", "build"),
    },
    // Source maps support ("inline-source-map" also works)
    devtool: (isProduction) ? "source-map" : "eval",
    module: {
        rules: [
            { test : /\.css?$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.(js?|ts?|tsx?)$/, loaders: ['babel-loader'], exclude: /(node_modules)|(assets)|(build)|(dist)|(output)|(electron)/ },
        ],
        
    },
    node: { module: "empty", net: "empty", fs: "empty" },
    plugins: plugins
};