const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
});

// /* eslint-disable @typescript-eslint/no-var-requires */
// /* eslint-disable no-undef */
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// module.exports = {
// 	mode: "production",
// 	entry: ["./src/index.js"],
// 	output: {
// 		filename: "[name].bundle.js",
// 		chunkFilename: "[name].bundle.js",
// 		path: path.resolve(__dirname, "build"),
// 	},
// 	resolve: {
// 		extensions: [".js",".jsx"]
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: "babel-loader"
// 				}
// 			}
// 		]
// 	},
// 	plugins: [
// 		new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
// 		new CleanWebpackPlugin()
// 	],
// 	optimization: {
// 		minimizer: [
// 			new CssMinimizerPlugin(),
// 			new TerserPlugin(),
// 			new HtmlWebpackPlugin({
// 				template: "./src/index.html",
// 				minify: {
// 					removeAttributeQuotes: true,
// 					collapseWhitespace: true,
// 					removeComments: true
// 				}
// 			})
// 		]
// 	},
// };