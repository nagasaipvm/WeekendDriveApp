var path = require("path");
var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");
var config = {
    entry: SRC_DIR + "/app/index.jsx",
    output: {
       path:DIST_DIR +"/app/",
       filename: 'bundle.js',
    },
    
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             include: SRC_DIR,
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
}
module.exports = config;