CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const publicFolder = 'public';

// The files that will be exported using CopyWebpackPlugin
let assetsToCopy = [
    {
        from: path.resolve("src/assets"),
        to: path.resolve("public/assets")
    },
    {
        from: path.resolve("src", 'html'),
        to: path.resolve("public")
    },
    {
        from: path.join(__dirname, 'node_modules/pixi.js/dist/pixi.js'),
        to: path.join(__dirname, publicFolder, "js")
    },
    {
        from: path.join(__dirname, 'node_modules/pixi.js/dist/pixi.min.js'),
        to: path.join(__dirname, publicFolder, "js")
    },
    {
        from: path.join(__dirname, 'node_modules/pixi-spine/bin/pixi-spine.js'),
        to: path.join(__dirname, publicFolder, "js")
    },
    {
        from: path.join(__dirname, 'node_modules/puremvc/lib/puremvc-1.0.1.js'),
        to: path.join(__dirname, publicFolder, "js")
    }
];


module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, publicFolder),
        filename: 'js/bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(path.join(__dirname, 'node_modules'))]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(assetsToCopy)
    ],
    externals: {
        "pixi.js": {
            root: 'PIXI'
        },
        "pixi-spine": {
            root: 'PIXI.spine'
        },
        "puremvc": {
            root: "puremvc"
        }
    },
};