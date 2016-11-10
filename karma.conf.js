var webpackConfig = require('./webpack/webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		autoWatch: true,
		singleRun: false,
		frameworks: ['mocha'],
		files: [
			{pattern: 'test/client/**/*.test.js', watched: false, included: true, served: true}
		],
		preprocessors: {
			'test/client/**/*.test.js': ['webpack']
		},
		reporters: ['mocha'],
		client: {
			captureConsole: true,
			mocha: {
				timeout: '5000'
			}
		},
		webpack: Object.assign({}, webpackConfig, { externals: {
			'jsdom': 'window',
			'cheerio': 'window',
			'react/lib/ExecutionEnvironment': true,
			'react/lib/ReactContext': true,
			'react/addons': true
		}}),
		webpackServer: {
			noInfo: true,
			stats: {
				chunks: false,
				colors: true
			}
		}
	});
};
