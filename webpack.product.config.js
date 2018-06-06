"use strict";

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "",
        filename: "bundle.js"
    },
    module: {
    },
    plugins: [
        new UglifyJsPlugin({
            "uglifyOptions": {
                mangle: false
            }
        })
    ]
};