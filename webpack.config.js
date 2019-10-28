CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const publicFolder = 'public';

var assetsToCopy = [
    //Spine data
    {
        from: path.resolve("src/assets"),
        to: path.resolve("public/assets")
    },
    {
        from: path.resolve("src", 'pixi'),
        to: path.resolve("public/js")
    },
    {
        from: path.resolve("src", 'app'),
        to: path.resolve("public")
    },
];


module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, publicFolder),
        filename: 'js/bundle.js',
        // publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(path.join(__dirname, 'node_modules'))]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(assetsToCopy)
    ]
};