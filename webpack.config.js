const path = require('path');

module.exports = {
	mode: "development",
	devServer: {
			inline:true,
			port: 3000,
	},
	entry: "./index.js",
	output: {
			filename: "bundle.js",
      path: path.resolve(__dirname, 'docs'),
	},
	module: {
			rules: [
  				{
    				test: /\.es6$/,
    				exclude: /node_modules/,
    				loader: 'babel-loader',
    				query: {
      					cacheDirectory: true,
      					presets: ['react', 'es2015']
    				}
  				},
					{
						test: /\.(jpe?g|png|gif|svg)$/i,
						use: 'file-loader?limit=100000&name=./images/[hash].[ext]'
					},
					{
					  test: /\.(ogg|mp3|wav|mpe?g)$/i,
					  use: 'file-loader?limit=100000&name=./sounds/[hash].[ext]'
					}
			]
	},
	resolve: {
			extensions: ['.js', '.es6']
	},
}
