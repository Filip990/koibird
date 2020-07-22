const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpe?g)$/,
				loader: "file-loader",
				options: {
					outputPath: "images",
					name: "[name].[ext]",
				},
			},
			{
				test: /\.html$/,
				loader: "html-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new CopyPlugin({
			patterns: [{ from: "./src/assets/images", to: "images" }],
		}),
	],
};
