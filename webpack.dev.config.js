"use strict";
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "",
        filename: "bundle.js"
    },
    module: {

    },
    devtool: 'inline-source-map',
    mode: 'development'
};