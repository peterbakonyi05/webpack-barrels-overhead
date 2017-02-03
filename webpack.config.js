module.exports = [
	{
		entry: "./src/with-barrels/index.js",
		output: {
			filename: "output/webpack-with-barrels-bundle.js"
		}
	},
	{
		entry: "./src/without-barrels/index.js",
		output: {
			filename: "output/wepback-without-barrels-bundle.js"
		}
	}
];