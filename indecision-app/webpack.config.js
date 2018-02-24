//entry point -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //which files we want to use this loader on
            exclude: /node_modules/
        }]
    }
};
//loader lets us customize the behaviour of webpack when it loads a given file
//babel-core allows us to run babel from webpack
//babel-loader is a webpack plugin for babel
//babel-cli allows us to run babel from the command line 

