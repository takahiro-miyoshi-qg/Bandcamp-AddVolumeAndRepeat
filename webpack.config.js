const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./scripts/volume.ts",

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                exclude: /node_modules/,
                // TypeScript をコンパイルする
                use: "ts-loader"
            }
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [".ts"]
    },
    plugins: [
        new CopyPlugin([
            {from:"manifest.json", to:""},
            {from: "images", to: "images"}
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};