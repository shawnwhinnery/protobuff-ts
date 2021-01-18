var path = require("path")

module.exports = {
	mode: "production",
	entry: "./src/main.ts",
	target: "node",
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	resolve: {
		modules: ["node_modules", "src"],
		extensions: [".ts", ".js"]
	}
}
