// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');


module.exports = {
  components: "./components/**/*.tsx",
  ignore: ["./types"],
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  propsParser: require("react-docgen-typescript").parse,
  require: [
    path.join(__dirname, './styles/index.css'),
    path.join(__dirname, './compositions/compositions.js')
  ],
  webpackConfig: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
    resolve: {
      fallback: {
        path: require.resolve("path-browserify")
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-flexbugs-fixes",
                  "postcss-nesting",
                  [
                    "postcss-preset-env",
                    {
                      "autoprefixer": {
                        "flexbox": "no-2009"
                      },
                      "stage": 3,
                      "features": {
                        "custom-properties": false
                      }
                    }
                  ]
                ]
              },
            },
          }],
        },
        {
          test: /\.ts?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          }]
        },
      ]
    },
  }
};
