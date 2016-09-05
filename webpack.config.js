const webpack = require('webpack');
const debug = process.env.NODE_ENV !=="production";

module.exports = {
	context:__dirname,
	devtool: debug ? "sourcemap" : null,
	entry:{
		app:['./src/index.js','./index.html'],
		vendor:['react', 'react-dom']
	},
	output:{
		path:__dirname + "/dist",
		filename:'app/js/main.js'
	},
	module:{
		loaders:[
			{ test: /\.html$/, loader: "file?name=[name].[ext]" },
			{ test: /\.(png|jpg|woff|woff2|eot|ttf|otf)/, loader: 'url-loader' },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.svg/, loader: 'file?name=/img/[hash].[ext]?' },
			{ test:/\.jsx?$/, loader:'babel', exclude:/node_modules/ }
		]
	},
	plugins: debug ? [] : [
    	new webpack.optimize.CommonsChunkPlugin('vendor', 'app/js/vendors.js', Infinity),
    	new webpack.optimize.DedupePlugin(),
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin({mangle:true, sourcemap:false, beautify:false, dead_code:true}),
    	new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
  ]
};
