module.exports = {
	mode: "development",
	devServer: {
			inline:true,
			port: 3000,
			//host : '10.0.1.4', 
	},
	entry: "./index.js",
	output: {
			filename: "bundle.js"
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
  				}
			]
	},
	resolve: {
			extensions: ['.js', '.es6']
	},
}
