const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: 	'index.js',
	output : {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js'		
	},
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env'],
	          plugins: [require('@babel/plugin-proposal-object-rest-spread')]
	        }
	      }
	    }
	  ]
	},
	target: 'node'
}