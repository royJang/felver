const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackMiddleware = require("webpack-dev-middleware");
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const app = express();
const config = require('./webpack.config');
const opts = {
    quiet: true,
    watchOptions: {
		aggregateTimeout: 300,
		poll: true
	},
    stats: {
		colors: true
	}
};
const compiler = webpack(merge( config, {
    output: {
        library: 'felver',
        libraryTarget: 'umd'
    }
}));
const webpackDevMiddlewareInstance = webpackMiddleware( compiler, opts );

app.use(compression({ threshold: 0 }))
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'text/plain' }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(webpackDevMiddlewareInstance);

app.listen( 4000, '127.0.0.1', function ( err ){
    if( err ) return console.log( err );
    console.log('started');
});