require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizePlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        front: "./assets/front.js",
        admin: "./assets/admin.js"
    },
    output: {
        path: path.resolve(__dirname, "public/build/js"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            url: true,
                            sourceMap: true
                        }
                    }
                ],
            }
        ]
    },

    optimization: {
        minimizer: [
            new CssMinimizePlugin()
        ]
    },

    plugins: [].concat([new MiniCssExtractPlugin({
        filename: "../css/[name].css"
    })]),
};