const path = require("path");
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/ts/index.ts",
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
            outDir: "target/pkg"
        }),
    ],
    resolve: {
        extensions: [ ".tsx", ".ts", ".js", ".wasm"],
    },
};