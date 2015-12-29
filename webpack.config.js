var webpack = require('webpack'),
	path = require('path'),
	HtmlwebpackPlugin = require('html-webpack-plugin'),
	merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

var common = {
  entry: PATHS.app,
  // Given webpack-dev-server runs in-memory, we can drop
  // `output`. We'll look into it again once we get to the
  // build chapter.
  /*output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },*/
  // Add resolve.extensions. '' is needed to allow imports an extension
  // Note the .'s before extensions!!! Without those matching will fail
  resolve:{
	extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['babel', 'style', 'css'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    // Important! move HotModuleReplacementPlugin below
    //new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};

if(TARGET === 'start' || !TARGET) { //provides a default in case we're running Webpack outside of npm.
  module.exports = merge(common, {
    devtool: 'eval-source-map',  //setup sourcemaps
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
