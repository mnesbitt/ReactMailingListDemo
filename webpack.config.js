import webpack from 'webpack';
import path from 'path';

const rootDir = path.resolve(__dirname, '..');
const srcDirs = [
    path.resolve(rootDir, 'src'),
    path.resolve(rootDir, 'entry')
];

const appVersion = require(path.resolve(rootDir, 'package.json')).version;

const config = {
    entry: './entry/entry.js',
    output: {
        path: 'dist',
        filename: `mailingList-${appVersion}.js`
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: srcDirs,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jsx?/,
                loader: 'babel',
                include: srcDirs,
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    node: {
        fs: "empty"
    },
    target: 'node'
};

export default config;
