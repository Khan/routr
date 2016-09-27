const webpack = require("webpack");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./lib/router",


    output: {
        filename: "bundle." + (isProd ? "prod" : "dev") + ".js",
        path: __dirname + "/dist",
        libraryTarget: "commonjs2",
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
};
