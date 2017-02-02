module.exports = [
	{
		entry: "./src/with-barrels/index.js",
		output: {
			filename: "output/with-barrels-bundle.js"
		}
	},
	{
		entry: "./src/without-barrels/index.js",
		output: {
			filename: "output/without-barrels-bundle.js"
		}
	}
];