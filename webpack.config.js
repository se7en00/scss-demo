var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//support sass debug
	devtool: "source-map",

    entry: {
    	comments :[
            "webpack/hot/dev-server",
            "webpack-dev-server/client?http://localhost:8080",
            "./src/js/commentsEntry"
        ] 
    },

    output: {
        path: path.resolve(__dirname, "app/assets"),
        publicPath: "/assets/",  
        filename: 'js/[name].js'         
    },

   plugins: [
        new webpack.HotModuleReplacementPlugin(),
   		// new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            template: './src/pages/comments.html',
            filename: 'view/comments.html',
            inject:true,  
            hash:true,  
            })
    ],

    module : {
    	loaders : [
	    	 /**
             * CSS
             * https://github.com/webpack/css-loader
             */
    		{ test: /\.css$/,loader: ExtractTextPlugin.extract("style","css")},
    		 /**
             * Fonts/Images
             * https://github.com/webpack/url-loader
             */
    		{ test: /\.(png|gif|bmp|jpg|woff|woff2|ttf|eot|otf|svg)([\?#][a-zA-Z0-9#?&=.]*)?$/, loader: "url?limit=8192name=./images/[hash].[ext]"},
    		 /**
             * SASS
             * https://github.com/jtangelder/sass-loader
             */
    		{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style","css?sourceMap!postcss!sass?sourceMap")},

            {test: /\.html$/,loader: "html"}
    	]
    },

    postcss: [ 
        autoprefixer({ browsers: ['last 3 versions'] }) 
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: "./app",
        hot:true,
        inline:true,
        port:8081
    }
};