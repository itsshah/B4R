const webpack = require('webpack');
const vendor_dir = __dirname + '/node_modules/';

module.exports = {
	entry:{
		app:['./src/index.js','./index.html'],
		vendor:['react']
	},
	resolve:{
		alias:{
			'react': vendor_dir + 'react/dist/react.js',
			'react-dom': vendor_dir + 'react-dom/dist/react-dom.js'
		}
	},
	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendor', 'app/js/vendors.js', Infinity)
  	],
	output:{
		path:__dirname + "/dist",
		filename:'app/js/main.js'
	},
	module:{
		noParse:[vendor_dir + 'react/dist/react.js', vendor_dir + 'react-dom/dist/react-dom.js'],
		loaders:[
			{ test: /\.html$/, loader: "file?name=[name].[ext]" },
			{ test: /\.(png|jpg|woff|woff2|eot|ttf|otf)/, loader: 'url-loader' },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.svg/, loader: 'file?name=/img/[hash].[ext]?' },
			{ test:/\.jsx?$/, loader:'babel', exclude:/node_modules/ }
		]
	}
}