const path = require("path");

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    splitChunks: {
			chunks: 'all',
		},
  },
  devServer: {
    static: path.join(__dirname, './public'),
		open: true,
		port: 8564,
  },
  performance: {
    maxAssetSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
			type: 'asset/resource',
			use: [
				"file-loader",
				{
					loader: "image-webpack-loader",
					options: {
							bypassingOnDebug: true,
							disable: true,
					},
				},
			],
      },
    ],
  },
};