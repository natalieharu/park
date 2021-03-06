const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isIE = process.env.IE;
const isDevServer = process.env.SERVE;

const plugins = [
	new CaseSensitivePathsPlugin(),
	new BrowserSyncPlugin(
		{
			host: 'localhost',
			port: 3000,
			proxy: 'http://localhost:3100/',
            files: ['./app/**/*.html'],
			browser: isIE ? 'iexplore' : 'chrome',
		},
		{
			reload: false,
		}
	),
	new HTMLWebpackPlugin({
		filename: 'index.html',
		template: 'index.html',
		chunks: ['main'],
		favicon: 'img/skatepark.png',
	}),
	new HTMLWebpackPartialsPlugin({
		path: path.join(__dirname, './app/partials/modal.html'),
		location: 'modal',
		template_filename: ['index.html'],
		priority: 'replace',
	}),
	new MiniCssExtractPlugin({
		filename: isProd ? 'css/[name].[contenthash].css' : 'css/[name].css',
	}),
	new CleanWebpackPlugin(),
];

if (!isProd) {
	plugins.push(new webpack.HotModuleReplacementPlugin());
}

const supportIE = {
	test: /\.m?js$/i,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				[
					'@babel/preset-env', {
						debug: !isProd,
						corejs: 3,
						useBuiltIns: 'usage',
					}
				]
			]
		}
	}
};

module.exports = {
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? false : 'eval-source-map',
	target: isProd ? 'browserslist' : 'web',
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: './js/common.js',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'app/'),
			'@js': path.resolve(__dirname, 'app/js/'),
			'@css': path.resolve(__dirname, 'app/css/'),
			'@img': path.resolve(__dirname, 'app/img/'),
		},
	},
	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: isDevServer ? '/' : './',
	},
	devServer: {
		port: 3100,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins,
	module: {
		rules: [
			isIE ? supportIE : {},
			{
				test: /\.html$/,
				use: [
					'html-loader',
				],
			},
			{
				test: /\.(svg|png|jp(e?)g|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img',
					}
				},
			},
			{
				test: /\.(ttf|eot|woff(2?))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'fonts',
					}
				},
			},
			{
				test: /\.php$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: '/',
					}
				},
			},
			{
				test: /\.s(a|c)ss$/i,
				use: [
					isProd ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
						},
					},
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
};
