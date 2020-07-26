const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

module.exports = {
	entry: {
		app: "./src"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devtool: "source-map",
	devServer: {
		compress: true,
		contentBase: [path.join(__dirname, "./src/assets")]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(sass|scss)$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[local]"
							}
						}
					},
					"postcss-loader",
					"sass-loader"
				]
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(svg|jpg|png)$/,
				exclude: /node_modules/,
				loader: "file-loader",
				options: {
					name: "/images/[name].[ext]"
				}
			}
		]
	},
	resolve: {
		modules: ["node_modules", "src"],
		plugins: [
			new DirectoryNamedWebpackPlugin({
				exclude: /node_modules/
			})
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Koibird"
		}),
		new CopyPlugin({
			patterns: [{ from: "./src/assets/images", to: "images" }]
		})
	]
};
