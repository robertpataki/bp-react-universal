// This is the base Webpack configuration file

var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// project folder
var root_folder = path.resolve(__dirname, '..')

// where all the (source) assets reside
var assets_source_folder = path.resolve(root_folder, 'assets')

// regular expressions for module.loaders
var regular_expressions =
{
	javascript : /\.js$/,
	json: /\.json$/,
	styles     : /\.scss$/,
	static: /.jpe?g$|.gif$|.png$|.svg$|.ico$|.woff$|.ttf$|.otf$|.eot$/
}

var configuration =
{
	// resolve all relative paths from the project root folder
	context: root_folder,

	// https://webpack.github.io/docs/multiple-entry-points.html
	entry:
	{
		main: './code/client/application.entry.js'
	},

	output:
	{
		// filesystem path for static files
		path: path.resolve(root_folder, 'build/assets'),

		// network path for static files
		publicPath: '/assets/',

		// file name pattern for entry scripts
		filename: '[name].[hash].js',

		// file name pattern for chunk scripts
		chunkFilename: '[name].[hash].js'
	},

	module:
	{
		loaders:
		[
			{
				test   : regular_expressions.json,
				loader : 'json-loader'
			},
			{
				test    : regular_expressions.javascript,
				// include: [path.resolve(root_folder, 'code')],
				// exclude: path.resolve(root_folder, 'node_modules'),
				exclude: [/node_modules/],
				loader: 'babel-loader'
			},
			{
				test    : regular_expressions.styles,
				loaders :
				[
					'style-loader',
					'css-loader?importLoaders=2&sourceMap',
					'postcss-loader',
					'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
				]
			},
			{
				test    : regular_expressions.static,
				loaders :
				[
					'file-loader'
				]
			}
		]
	},

	postcss: () => [autoprefixer({ browsers: 'last 2 version' }), require('postcss-utilities')],

	sassLoader: {
		sourceMap: true,
		outputStyle: 'expanded',
    includePaths: [
			path.resolve(__dirname, '../node_modules'),
			path.resolve(__dirname, '../node_modules/cutestrap/dist/scss')
		]
  },

	// maybe some kind of a progress bar during compilation
	progress: true,

	resolve:
	{
		// you can now require('file') instead of require('file.[extension]')
		extensions: ['', '.json', '.js']
	},

	plugins: [
		new ExtractTextPlugin('style.css')
	]
}

module.exports = configuration

// will be used in development and production configurations
configuration.regular_expressions = regular_expressions
