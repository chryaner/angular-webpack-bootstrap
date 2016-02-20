var path = require('path');

module.exports = {
    context: 
        path.join( __dirname, '/src'),
        entry: 'app.js',
        resolve: {
        root: path.join( __dirname, '/src')
    },
    module: {
        loaders: 
        [{
            test:/\.js$/,
            exclude:'/node_module/',
            loader:'babel',
            query: { presets: ['es2015', 'stage-1'] }
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },
        {
            test: /\.html$/,
            exclude: /node_modules/,
            loader:"raw"
        },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }

        ]
    }
}
