const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	  },
	module:{
		rules:[{
			loader: "babel-loader",
			test: /\.(ts|js)x?$/,
			exclude: /node_modules/,
			options: {
				presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
			}
		},
	    {
			test: /\.scss$/,
			use: [
				"style-loader", // 3. Inject styles into DOM
				"css-loader", // 2. Turns css into commonjs
				"sass-loader", // 1. Turns sass into css
			],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
		]
	}
});
