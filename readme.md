# Notes

Source of tutorial: http://survivejs.com/webpack_react/developing_with_webpack/

## Installing html webpack plugin

Install html-webpack-plugin - used to create the index.html

"We could create index.html by hand. Maintaining that could become troublesome as the project grows, though. html-webpack-plugin is able to create links to our assets keeping our life simple"

npm i html-webpack-plugin --save-dev

we setup the config to map our application to build/bundle.js and generate build/index.html

## Installing webpack-dev-server

'webpack-dev-server is a development server running in-memory that automatically refreshes content in the browser while you develop the application.'

npm i webpack-dev-server --save-dev

we will invoke our development server through npm - see the 'scripts' section of the package.json

## Refreshing CSS

'Webpack allows us to change CSS without forcing a full refresh.'

Install these loaders:

npm i css-loader style-loader --save-dev

see loaders section in webpack.config.js

## Setup for deployments

Need to define differnet 'build targets'

todo: read more about this: https://antwarjs.github.io/ :

'Webpack works well as a basis for more advanced tools. I've helped to develop a static site generator known as Antwar. It builds upon Webpack and React and hides a lot of the complexity from the user.'

### Setup Configuration Target for npm start

npm i webpack-merge --save-dev   <-- custom merge function that concats arrays and merges objects

'To improve the debuggability of the application, we can set up sourcemaps while we are at it. They allow you to see exactly where an error was raised. In Webpack this is controlled through the devtool setting'

'If you run the development build now using npm start, Webpack will generate sourcemaps. Webpack provides many different ways to generate them as discussed in the official documentation ( https://webpack.github.io/docs/configuration.html#devtool ). In this case, we're using eval-source-map. It builds slowly initially, but it provides fast rebuild speed and yields real files.'

https://blog.jetbrains.com/webstorm/2015/09/debugging-webpack-applications-in-webstorm/

# Webpack and React...

http://survivejs.com/webpack_react/webpack_and_react/

## Setting up Babel

Configure the babel-loader

npm i babel-loader@5.x --save-dev

# Installing React - creating the first React View

npm i react react-dom --save


