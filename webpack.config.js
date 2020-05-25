const path = require("path");
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    },
    entry: "./src/ts/bootstrap.ts",
    mode: "none",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.wasm$/,
                type: "webassembly/experimental"
            }
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "src/rust"),
            forceWatch: true,
            outDir: "target/pkg"
        }),
    ],
    resolve: {
        extensions: [ ".tsx", ".ts", ".js", ".wasm"],
    },
};