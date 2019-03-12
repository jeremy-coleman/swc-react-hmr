'use strict'

const path = require('path')
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsPathAliasPlugin = require('tsconfig-paths-webpack-plugin')
const OUTPUT_CLIENT_DIRECTORY = path.resolve(__dirname, 'build');


module.exports = {
  watch: true,
  mode: 'development',
  entry: ['./src/index.tsx', 'webpack-plugin-serve/client'],
  output: {
    path: OUTPUT_CLIENT_DIRECTORY,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'react-hot-loader/webpack',
          {
          loader: 'swc-loader', //require.resolve('..'),  // you would put swc-loader
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  pragma: 'React.createElement',
                  pragmaFrag: 'React.Fragment',
                  throwIfNamespace: true,
                  development: false,
                  useBuiltins: false
                }
              }
            }
          }
        }]
      }
    ]
  },

  resolve:{ 
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".mjs", ".wasm"],
    plugins: [
      new TsPathAliasPlugin({configFile: './tsconfig.json'})
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
},

  plugins:[
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new Serve({
      // note: this value is true by default
      hmr: true,
      host: "localhost",
      progress: false,
      historyFallback: true,
      static: [OUTPUT_CLIENT_DIRECTORY]
    })
  ],
  
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendor',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },

}
